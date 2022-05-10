import React from "react";

//created as seperate component to be reused with favorites as well
const MovieListHeader = (props) => {
    return(
        <div className='col'>
            <h1>{props.heading}</h1>
        </div>
    )
}

export default MovieListHeader;