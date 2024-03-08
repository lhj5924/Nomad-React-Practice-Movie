import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function Movie({id, title, year, rating, coverImgM, summary, genres}) {
    return (
    <div>
        <h2>
        <Link to={`/movie/${id}`}>{title}({year}) ({rating})</Link>
        </h2>
        <img src={coverImgM} alt={title} />
        <p>{summary}</p>
        <ul>
        {genres&&genres.map(g => <li key={g}>{g}</li>)}
        </ul>
    </div>
    )
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;