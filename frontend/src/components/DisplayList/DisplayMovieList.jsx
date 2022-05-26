import React from "react";

const DisplayMovieList = (props) => {
  const Image_path = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      {props.movies.map((movie, { selectMovie }) => (
        <div key={movie.id} onClick={() => selectMovie(movie)}>
          {movie.poster_path ? (
            <img
              className={"movie-cover"}
              src={`${Image_path}${movie.poster_path}`}
              alt="movie"
            ></img>
          ) : (
            <div className={"movie-placeholder"}> No Image Found</div>
          )}
          <h4 className={"movie-title"}>{movie.original_title}</h4>
          <div className="card-content">
            <p>
              <a href="Movie Details">View Details</a>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default DisplayMovieList;
