import { useEffect, useState } from "react"
import Movie from "../components/Movie";

export default function Home() {

    const url = "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const getMovies = async() => {
      const data = await (
        await fetch(url)).json()
      .then((json)=>{
        setMovies(json.data.movies);
        setLoading(false)
      })
    }
  
    useEffect(() => {
      getMovies();
    }, [])
  
    return (
      <div className="App">
        <h1>Movies</h1>
        {loading ? <h2>Loading...</h2> : 
        <>
          {movies.map((movie)=>
          <Movie key={movie.id} title={movie.title} 
          id={movie.id}
          year={movie.year} rating={movie.rating} coverImgM={movie.medium_cover_image} summary={movie.summary} genres={movie.genres}/>
          )}
        </>
      }
      </div>
    )
}