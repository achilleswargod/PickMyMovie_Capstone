import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayMovieList from "./DisplayMovieList";
import MovieListHeader from "./MovieHeader"
import "bootstrap/dist/css/bootstrap.min.css";
import './MovieListPage.css';
import SearchBar from "../SearchBar";

function MovieListPage() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
 
  
  const getMovieRequest = async (searchTerm) => {
		try {
      let response = await axios.get( `http://www.omdbapi.com/?s=${searchTerm}&apikey=909cfcfe`);
      console.log("Movie Search: ", response.data);

      if(response.Search){
        setMovies(response.data.Search);
      }
		} catch(error){
      console.log(error);
    }
	};

  useEffect(() => {
    getMovieRequest(searchTerm)
  }, [searchTerm]);

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <MovieListHeader heading='Movies' />
      </div>
      <div className='row'>
      <DisplayMovieList movies={movies} />
      </div>
    </div>
  );
}

export default MovieListPage;
