import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayMovieList from "./DisplayMovieList";


function MovieListPage() {
  const [movies, setMovies] = useState([]);
 
  
  const getMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?s=star wars&apikey=909cfcfe`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

  useEffect(() => {
    getMovieRequest()
  }, []);

  return (
    <div className="movieListContainer">
      <DisplayMovieList movies={movies} />
    </div>
  );
}

export default MovieListPage;
