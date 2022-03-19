import {useLocation} from "react-router-dom";

const FilmPage = () => {
    const location = useLocation()
    const {film} = location.state
    console.log(film)
    return (
        <div className={"page-container"}>
            <div className={"poster"}>
                <img src={`https://image.tmdb.org/t/p/original/${film.poster}`} alt={`${film.title}`}/>
            </div>
            <div className={"info"}>
                <div className={"title"}>{film.title}</div>
                <div><span>Overview</span> : {film.overview}</div>
                <div><span>Rating</span> : {film.rating}</div>
                <div><span>Original language</span> : {film.rating}</div>
                <div><span>Adult</span> : {film.adult ? "Yes" : "No"}</div>
            </div>
        </div>
    )
}

export default FilmPage;