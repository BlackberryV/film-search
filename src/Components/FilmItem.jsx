import "../styles/style.css"
import {Link} from "react-router-dom";

const FilmItem = ({film}) => {
    return (
        <div key={film.title} className={"FilmItem"}>
            <img src={`https://image.tmdb.org/t/p/original/${film.poster}`} alt={`${film.title}`}/>
            <Link
                to={`/film/${film.id}`}
                state={{film: film}} className={"film-title"}>{film.title}
            </Link>
            <div>Rating: {film.rating}</div>
        </div>
    )
}

export default FilmItem;