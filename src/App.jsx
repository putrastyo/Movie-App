import { useState, useEffect } from "react"
import MovieCard from './components/MovieCard'
import Header from './components/Header'
import './App.css'

const API_URL = "http://www.omdbapi.com/?apikey=bd58e087"

const App = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }
  useEffect(() => {
    searchMovies(search)
  }, [])
  
  return (
  <>
  <Header props1={setSearch} props2={searchMovies} props3={search}/>
  <main>
    {
      movies?.length ? (
        <div className="container">
          {movies.map(movie => (<MovieCard key={movie.imdbID} movie={movie}/>))}
        </div>
        ) : (
        <div className="empty">
          <h4>No result</h4>
        </div>)
    }
  </main>
  </>
  )
}

export default App