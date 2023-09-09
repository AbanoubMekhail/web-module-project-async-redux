import React from 'react';
import './App.css';
import data from './data/rawData'
import JokesList from './components/jokesList';
import JokesForm from './components/JokesForm';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getJokes } from './actions';



function App(props) {
  const {loading, jokes, error, getJokes} = props;
  // const jokes = data;
  // const loading = false;
  // const error = '';

  useEffect(()=>{
    getJokes();
  },[])
  

  return (
    <div className="App">
      <h1>Laughs for free</h1>
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

export default connect(mapStateToProps, {getJokes})(App);