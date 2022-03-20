import "../styles/style.css"
import {NavLink} from "react-router-dom";

const FilmItem = ({film}) => {
    return (
        <div key={film.id} className={"FilmItem"}>
            <img src={`https://image.tmdb.org/t/p/original/${film.poster}`} alt={`${film.title}`}/>
            <NavLink
                to={`/film/${film.id}`}
                state={{film: film}} className={"film-title"}>{film.title}
            </NavLink>
            <div>Rating: {film.rating}</div>
        </div>
    )
}

export default FilmItem;