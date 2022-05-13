import React from "react";
import './HomePage.css';
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import axios from "axios";
import DisplayMovieList from "../../components/DisplayList/DisplayMovieList";
import MovieListHeader from "../../components/DisplayList/MovieHeader";


function PopularMovieListPage() {
  const [user, token] = useAuth();
  const [popularMovies, setPopularMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(1);
 
  
  const getMovieRequest = async () => {
		try {
      let response = await axios.get( 'https://api.themoviedb.org/3/discover/movie?api_key=0a2120a41a7a10a89778afb18eb3fd0b&sort_by=popularity.desc');
      console.log("Movie Search: ", response.data.results);

      //did this so that the info would never return "undefined"
      if(response.data.results)
      {
        setPopularMovies(response.data.results);
      }
		} catch(error){
      console.log(error);
    }
	};

  useEffect(() => {
    getMovieRequest()
  }, []);

  
  return (
    <div className="container">
      <h1 className="user-name">Home Page for {user.username}!</h1>
      <MovieListHeader heading='Current Popular Movies' />
        <Link to="/movielistpage">Click here to search for a movie!</Link>
      <div className="movie-container">
        <DisplayMovieList movies={popularMovies} />
      </div>
    </div>
  );
};

export default PopularMovieListPage;