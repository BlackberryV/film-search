import SearchForm from "./SearchForm";
import {useEffect, useState} from "react";
import FilmItem from "./FilmItem";

function App() {

    const apiLink = 'https://api.themoviedb.org/3/movie';
    const apiKey = '?api_key=161efc4a60078fa99ee9f7500b81f9e1';

    const [films, setFilms] = useState([]);

    async function getPopularFilms() {
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
        getPopularFilms().then()
    }, [])

    function searchFilms(titleValue) {
        if (titleValue && titleValue !== "") {
            const filteredFilms = films.filter(film => film.title === titleValue)
            setFilms(filteredFilms);
        } else {
            getPopularFilms().then()
        }
    }


    return (
        <div className="App">
            <SearchForm searchFilm={searchFilms}/>
            <div className={"film-items_container"}>
                {
                    films.length ? films.map((film) => (<FilmItem key={film.title} film={film}/>))
                        : <div>Sorry but we do not have such films!<br/>
                             Press enter to come back;)
                        </div>}
            </div>
        </div>
    );
}

export default App;
