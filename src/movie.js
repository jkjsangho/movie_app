import React from "react";
import PropTypes from "prop-types";
import "./movie.css";

function Movie({id, year, title, summary, poster, genres}){
    return(
    <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie_data">
            <h5 className="movie_title">{title}</h5>
            <h5 className="movie_year">{year}</h5>
            <ul className="movie_generes">
                {genres.map((genre, index) => (
                    <li key={index} className="genres_genre">{genre}</li>
                ))}
            </ul>
            <h5 className="movie_summary">{summary.slice(0,140)}</h5>
        </div>
    </div>
    )
}
//인자 오류 검사
Movie.propTypes={
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;