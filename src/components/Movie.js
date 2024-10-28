import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({title, year, summary, poster, genres, id}) {
    return (
        <div>
            <img src={poster} alt={title} />
            <h2><Link to={`/detail/${id}`}>{title}</Link></h2>
            <h3>{year}</h3>
            <p>{summary}</p>
            <ul>
                {genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                ))}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.number.isRequired,
}

export default Movie;