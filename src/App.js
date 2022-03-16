import SearchForm from "./SearchForm";
import {useEffect, useState} from "react";
import FilmItem from "./FilmItem";

function App() {

    const apiLink = 'https://api.themoviedb.org/3/movie';
    const apiKey = '?api_key=161efc4a60078fa99ee9f7500b81f9e1';

    const [films, setFilms] = useState([]);

    async function getFilms() {
        const data = await fetch(`${apiLink}/popular/${apiKey}`)
            .then(r => {
                return r.json()
            })
        const results = data.results;
        let filmsArr = []
        for (const key in results) {
            filmsArr.push({
                adult: results[key].adult,
                poster: results[key].poster_path,
                rating: results[key].vote_average,
                title: results[key].title,
                overview: results[key].overview,
            })
        }
        setFilms(filmsArr)
    }

    useEffect(() => {
        getFilms().then()
    }, [])

    return (
        <div className="App">
            <SearchForm/>
            {films.map((film) => (<FilmItem key={film.title} film={film}/>))}
        </div>
    );
}

export default App;
