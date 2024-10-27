import { Link } from "react-router-dom";

function MovieCard({ movieData, genres }) {
  const imageUrl = "https://image.tmdb.org/t/p/w500";

    let findGenres = movieData && movieData.genre_ids.map(id => genres && genres.find(genre => genre.id === id))
  return (
    <Link
      style={{ textDecoration: "none", color: "#B5B5B5" }}
      to={`/${movieData.id}`}
    >
      <div className="movie">
        <div className="movie__image">
          <img src={imageUrl + movieData.poster_path} alt="" />
        </div>
        <h4 className="movie__title">{movieData.title}</h4>
        {findGenres.map((genre, index) => <span key={index}>{genre.name + (index === findGenres.length - 1 ? '': ',')} </span>)}
      </div>
    </Link>
  );
}

export default MovieCard;
