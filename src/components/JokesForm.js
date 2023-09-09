import React from "react";
import { connect } from "react-redux";
import { getJokes } from "../actions";


const JokesForm = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('cleck');
    props.getJokes()
  }


return (<form onSubmit={handleSubmit}>
    <button>More jokes</button>
  </form>)
}

export default connect(null, { getJokes })(JokesForm);