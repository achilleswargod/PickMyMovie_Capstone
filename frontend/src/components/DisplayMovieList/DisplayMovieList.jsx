import MovieList from "../../pages/MovieListPage/MovieListPage";

const DisplayMovieList = (props) => {
  return props.movies.map((movie, index) => {
    return (
      <div className="mappedMovieList">
        <table>
          <thead>
            <th>{movie.title}</th>
            <tbody>
              <tr key={index}></tr>
            </tbody>
          </thead>
        </table>
      </div>
    );
  });
};
