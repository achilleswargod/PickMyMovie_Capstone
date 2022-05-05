import axios from "axios";
import React, { useEffect, useState } from "react";

function MovieList(props) {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState("");
  const [formData, handleInputChange, handleSubmit] = useState([]);

  let token = "909cfcfe";

  async function fetchMoviesByTitle(searchTerm) {
    let response = await axios.get(
      `http://www.omdbapi.com/?apikey=${token}&t=${searchTerm}`
    );

    console.log("Movies fetched: ", response.data.items);

    setMovies(response.data.items);
  }

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchMoviesByTitle();
    }
    return () => (mounted = false);
  }, []);

  return (
    <div className="movieListContainer">
      {movies && movies.map((movie) => (
          <p key={movie.movieId}>
              {movie.}
          </p>
      ))}
    </div>
  );
}

export default MovieList;
