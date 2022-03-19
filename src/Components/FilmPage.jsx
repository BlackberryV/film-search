import {useLocation} from "react-router-dom";
import {useState} from "react";

const FilmPage = () => {
    const location = useLocation();
    const {film} = location.state;
    const [filmData] = useState(film)

    return (
        <div className={"page-container"}>
            <div className={"poster"}>
                <img src={`https://image.tmdb.org/t/p/original/${filmData.poster}`} alt={`${filmData.title}`}/>
            </div>
            <div className={"info"}>
                <div className={"title"}>{filmData.title}</div>
                <div><span>Overview</span> : {filmData.overview}</div>
                <div><span>Rating</span> : {filmData.rating}</div>
                <div><span>Original language</span> : {filmData.rating}</div>
                <div><span>Adult</span> : {filmData.adult ? "Yes" : "No"}</div>
            </div>
        </div>
    )
}

export default FilmPage;