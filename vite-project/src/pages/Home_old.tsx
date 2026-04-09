import MovieCard from "../components/MovieCard"
import {useState} from "react"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title:"John Wick", release_date:"10-10-2020"},
        {id: 2, title:"Terminator", release_date:"10-10-1980"},
        {id: 3, title:"The Matrix", release_date:"10-10-1997"},
    ];

    const handleSearch = (e: any) => {
        e.preventDefault()
        alert(searchQuery)
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
                {movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (
                        <MovieCard title={movie.title} key={movie.id} url="www.something.com" release_date={movie.release_date}></MovieCard>
                    )))}
            </div>
        </div>
    )
}

export default Home

