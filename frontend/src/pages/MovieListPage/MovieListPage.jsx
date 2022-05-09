import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayMovieList from "../../components/DisplayMovieList/DisplayMovieList";
import MovieListTable from "../../components/DisplayMovieList/MovieListTable";

function MovieListPage(props) {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  //   const [formData, handleInputChange, handleSubmit] = useState([]);

  async function getMoviesByTitle() {
    try {
      let response = await axios.get(
        `http://www.omdbapi.com/?apikey=909cfcfe&t=terminator`
      );
      console.log("Movies: ", response.data);
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getMoviesByTitle()
  }, []);

  return (
    <div className="movieListContainer">
      <MovieListTable mapMovies={mapMovies} />
    </div>
  );
}

export default MovieListPage;
