import FilmItem from "./FilmItem";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const GenreSearch = ({films, getFilmsByGenre}) => {
    const location = useLocation();
    const {genre} = location.state;
    useEffect(() => {
        getFilmsByGenre(genre).then()
    }, [genre])
    return (
        <div className={"film-items_container"} id={"popular-films"}>
            {films.map((film) => (<FilmItem key={film.id} film={film}/>))}
        </div>
    )
}

export default GenreSearch;