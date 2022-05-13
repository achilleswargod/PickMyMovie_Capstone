import React from "react";

const DisplayMovieList = (props) => {
  const Image_path = "https://image.tmdb.org/t/p/w500"
  return (
    <>
      {props.movies.map((movie, index) =>(
        <div key={movie.id}>
          {movie.poster_path ? <img className={'movie-cover'} src={`${Image_path}${movie.poster_path}`} alt='movie'></img> : null}
          <h4 className={"movie-title"}>{movie.original_title}</h4>
          <div className="card-content">
            <p><a href="Movie Details">View Details</a></p>
          </div>
        </div>
      ))}
      
    </>
  );
      }

export default DisplayMovieList;
