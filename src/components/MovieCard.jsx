const MovieCard = ({movie}) => {
  return (
    <>
    <div className="card">
      <img src={movie.Poster != "N/A"? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
      <div className="card-body">
        <h4>{movie.Title}</h4>
        <small>{movie.Year}</small>
      </div>
    </div>
    </>
  )
}

export default MovieCard;