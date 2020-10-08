import React from "react";
import PropTypes from "prop-types";
import "./movie.css";

function Movie({id, year, title, summary, poster, genres}){
    return(
    <div class="movie">
        <img src={poster} alt={title} title={title}></img>
        <div class="movie_data">
            <h5 class="movie_title">{title}</h5>
            <h5 class="movie_year">{year}</h5>
            <ul class="movie_generes">
                {genres.map((genre, index) => (
                    <li key={index} class="genres_genre">{genre}</li>
                ))}
            </ul>
            <h5 class="movie_summary">{summary}</h5>
            <p class="movie_generes">{summary}</p>
        </div>
    </div>
    )
}

Movie.propTypes={
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;