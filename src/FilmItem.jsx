import "./styles/style.css"

const FilmItem = ({film}) => {
    return (
        <div key={film.title} className={"FilmItem"}>
            <img src={`https://image.tmdb.org/t/p/original/${film.poster}`}/>
            <div className={"film-title"}>{film.title}</div>
            <div>Rating: {film.rating}</div>
        </div>
    )
}

export default FilmItem;