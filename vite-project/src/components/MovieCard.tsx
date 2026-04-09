import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"

type MovieCardProps = {
    id: number;
    url: string;
    title: string;
    release_date: string;
    poster_path: string;
};

function MovieCard(props: MovieCardProps) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(props.id)

    function OnFavoriteClick(e: any) {
        e.preventDefault()
        if (favorite) removeFromFavorites(props.id)
        else addToFavorites(props)
    }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt={props.title}></img>
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={OnFavoriteClick}>
                        heart
                    </button>
                </div>
                <div className="movie-info">
                    <h3>{props.title}</h3>
                    <p>{props.release_date?.split("-")[0]}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard

