import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorite() {
    const { favorites } = useMovieContext();

    if (favorites) {
        return 
            <div classname="favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites.map((movie: any) => (
                        movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (
                            <MovieCard title={movie.title} key={movie.id} url="www.something.com" release_date={movie.release_date}></MovieCard>
                        )))}
                </div>
            </div>
    }

    return(
        <div className="favorite-empty">
            <h2>No Favorite Movies Yet...</h2>
            <p>Add your favorite movies and they will appear here!</p>
        </div>
    )
}

export default Favorite

