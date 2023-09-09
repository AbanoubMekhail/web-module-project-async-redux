import React from "react";
import Joke from "./Joke";


const JokesList = props => {
    
    const { jokes } = props;

    return (<div>
        {
            jokes.map(joke => {
                return(
                    <Joke joke={joke}/>
                )
            })
        }

    </div>)
}



export default JokesList;