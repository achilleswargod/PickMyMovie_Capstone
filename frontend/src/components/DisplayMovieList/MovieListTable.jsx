import React from "react";

const MovieTable = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Rated</th>
          <th>Genre</th>
          <th>Actors</th>
          <th>Poster</th>
        </tr>
      </thead>
    </table>
  );
};

export default MovieTable;
