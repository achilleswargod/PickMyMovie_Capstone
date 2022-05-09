import React from "react";
import MovieListPage from "../../pages/MovieListPage/MovieListPage";

const DisplayMovieList = (props) => {
  return (
    <tr>
      <td>{props.movie.Title}</td>
      <td>props.movie.Year</td>
      <td>props.movie.Rated</td>
      <td>props.movie.Genre</td>
      <td>props.movie.Actors</td>
      <td>props.movie.Poster</td>
    </tr>
  );
};
export default DisplayMovieList;
