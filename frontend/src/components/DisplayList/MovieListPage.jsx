import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayMovieList from "./DisplayMovieList";
import MovieListHeader from "./MovieHeader"
import './MovieListPage.css';
import SearchBar from "../SearchBar";


function MovieListPage() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState({});
  const Image_path = "https://image.tmdb.org/t/p/w1280"

  const getMovieRequest = async (searchTerm) => {
		try {
      let response = await axios.get( `https://api.themoviedb.org/3/search/movie?api_key=0a2120a41a7a10a89778afb18eb3fd0b&query=${searchTerm}`);
      console.log("Movie Search: ", response.data.results);

      //did this so that the info would never return "undefined"
      if(response.data.results)
      {
        setMovies(response.data.results);
        setSelectedMovie(response.data.results[0])
      }
		} catch(error){
      console.log(error);
    }
	};

  useEffect(() => {
    getMovieRequest(searchTerm)
  }, [searchTerm]);

  
  
  return (
    <div className='container movie-app'>
      <div className='movie-search-bar'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
      {/*set the backdrop to be an object at the top of the page*/}
      <div className="hero"  style={{backgroundImage: `url('${Image_path}${selectedMovie.backdrop_path}')`}}>
        <div className="hero-content">
          <button className="hero-button">Play Trailer</button>
          <h1>{selectedMovie.title}</h1>
          {/* If the movie does not have an overview it will not show*/}
         {selectedMovie.overview ?  <p className="the-overview">{selectedMovie.overview}</p>: null}
        </div>
      </div>
        <MovieListHeader heading='Movies' />
        <div className='row'>
          <DisplayMovieList movies={movies} />
        </div>
          
    </div>
  );
}

export default MovieListPage;
