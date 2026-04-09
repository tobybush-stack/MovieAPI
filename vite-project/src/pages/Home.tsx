import MovieCard from "../components/MovieCard"
import {useState, useEffect} from "react"
import {searchMovies, getPopularMovies} from "../services/api"
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState<string[]>([]);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...");
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, []) // [] is the dependency array

    const handleSearch = async (e: any) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return
        setLoading(true);
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError("null")
        } catch (err) {
            setError("Failed to search movies...")
        } finally {
            setLoading(false)
        }
        setSearchQuery("");
    }

    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie: any) => (
                    movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (
                        <MovieCard title={movie.title} key={movie.id} url="www.something.com" release_date={movie.release_date}></MovieCard>
                    )))}
            </div>
        </div>
    )
}

export default Home

