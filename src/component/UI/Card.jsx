import React from "react";

const Card = ({ movieData }) => {
  return (
    <li className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Card Title : {movieData.Title}</h2>
        <p>Relese Year : {movieData.Year}</p>
      </div>

      <figure>
        <img src={movieData.Poster} alt={movieData.imdbID} />
      </figure>
    </li>
  );
};

export default Card;
{
}
