import data from "../data/rawData";

const intialState = {
    jokes: data,
    loading: false,
    error: ''
}

const reducer = (state = intialState, action) =>{
    switch(action.type) {
        default:
            return(state);
    }
}
export default reducer;