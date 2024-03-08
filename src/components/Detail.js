import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
                const json = await response.json();
                setMovie(json.data.movie);
            } catch (error) {
                console.error("Error fetching movie:", error);
            }
        };

        getMovie();
    }, [id]);

    return (
        <>
            <h1>Detail page - {movie ? movie.title : "Loading..."}</h1>
            {movie && (
                <>
                    <img src={movie.large_cover_image} alt={movie.title} />
                    <p>{movie.description_full}</p>
                </>
            )}
            <Link to="/">Home</Link>
        </>
    );
}
