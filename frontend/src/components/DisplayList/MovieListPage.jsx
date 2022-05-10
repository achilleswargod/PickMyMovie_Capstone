import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayMovieList from "./DisplayMovieList";
import MovieListHeader from "./MovieHeader"
import "bootstrap/dist/css/bootstrap.min.css";
import './MovieListPage.css';

function MovieListPage() {
  const [movies, setMovies] = useState([]);
 
  
  const getMovieRequest = async () => {
		try {
      let response = await axios.get( `http://www.omdbapi.com/?s=star wars&apikey=909cfcfe`);
      console.log("Movie Search: ", response.data);

      setMovies(response.data.Search)
		} catch(error){
      console.log(error);
    }
	};

  useEffect(() => {
    getMovieRequest()
  }, []);

  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
      <MovieListHeader heading='Movies' />
      </div>
      <div className='row'>
      <DisplayMovieList movies={movies} />
      </div>
    </div>
  );
}

export default MovieListPage;
