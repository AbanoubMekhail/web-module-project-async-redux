import React from 'react';
import './App.css';
import data from './data/rawData'
import JokesList from './components/jokesList';
import JokesForm from './components/JokesForm';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchStart, fetchSuccess } from './actions';
import axios from 'axios';


function App(props) {
  const {loading, jokes, error} = props;
  // const jokes = data;
  // const loading = false;
  // const error = '';

  useEffect(()=>{
    props.fetchStart();
    axios.get(`https://official-joke-api.appspot.com/random_ten`)
    .then(res => {
      console.log(res.data);
      props.fetchSuccess(res.data);
    })
  },[])
  

  return (
    <div className="App">
      Laughs for free
      <JokesForm />

      {
        (error !== '') && <h3>{error}</h3>
      }

      {
        loading ? <h3>Wait for your daily dose...</h3> : <JokesList jokes={jokes} />
      }

    </div>
  );
}

const mapStateToProps = state => {
  return {
    jokes: state.jokes,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, {fetchStart, fetchSuccess})(App);