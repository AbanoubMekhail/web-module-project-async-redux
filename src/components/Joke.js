import React from "react";

const Joke = props =>{
    const { joke } = props;

    return(
        <div>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>;
        </div>
    );
}

export default Joke;