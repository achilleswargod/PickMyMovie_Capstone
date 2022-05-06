import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayMovieList from "../../components/DisplayMovieList/DisplayMovieList";
import MovieListTable from "../../components/DisplayMovieList/MovieListTable";

function MovieListPage(props) {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  //   const [formData, handleInputChange, handleSubmit] = useState([]);

  let token = "909cfcfe";
  async function fetchMoviesByTitle() {
    try {
      let response = await axios.get(
        `http://www.omdbapi.com/?apikey=${token}&t=terminator`
      );
      console.log("Movies fetched: ", response.data);
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function mapMovies() {
    console.log("map movies");
    return movies.map((movie) => (
      <DisplayMovieList key={movie.title} movie={movie} />
    ));
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
      <MovieListTable mapMovies={mapMovies} />
    </div>
  );
}

export default MovieListPage;
