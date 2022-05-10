import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayMovieList from "./DisplayMovieList";


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
    <div className="movieListContainer">
      <DisplayMovieList movies={movies} />
    </div>
  );
}

export default MovieListPage;
