import React from "react";

const DisplayMovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) =>(
        <div key={movie.imdbID}>
          <img src={movie.Poster} alt='movie'></img>
          </div>
      ))}
    </>
  );
      }

export default DisplayMovieList;
