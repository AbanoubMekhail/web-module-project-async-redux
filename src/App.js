import React from 'react';
import './App.css';
import data from './data/rawData'
import JokesList from './components/jokesList';
import JokesForm from './components/JokesForm';
import { connect } from 'react-redux';

function App(props) {
  const {loading, jokes, error} = props;
  // const jokes = data;
  // const loading = false;
  // const error = '';

  

  return (
    <div className="App">
      Random jokes
      <JokesForm />

      {
        (error !== '') && <h3>{error}</h3>
      }

      {
        loading ? <h3>Jokes are comming</h3> : <JokesList jokes={jokes} />
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

export default connect(mapStateToProps)(App);