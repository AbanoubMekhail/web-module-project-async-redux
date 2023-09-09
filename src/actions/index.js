import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';



export const getJokes = () =>{
    return(dispatch => {
        dispatch({type: FETCH_START});
        axios.get(`https://official-joke-api.appspot.com/random_ten`)
    .then(res => {
      dispatch({type: FETCH_SUCCESS, payload:res.data})
      })
    });
  }
  

export const fetchStart = () => {
    return({type: FETCH_START})
}

export const fetchSuccess = (jokes) => {
    return ({type: FETCH_SUCCESS, payload: jokes})
}