import SearchForm from "./Components/SearchForm";
import {useEffect, useState} from "react";
import {Link, Route, Router} from "react-router-dom";
import List from "./Components/List";

// import Route from

function App() {

    const apiLink = 'https://api.themoviedb.org/3/';
    const apiKey = '?api_key=161efc4a60078fa99ee9f7500b81f9e1';

    const [popularFilms, setPopularFilms] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    function writeFilmsData(results) {
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
        return filmsArr;
    }

    async function getPopularFilms() {
        const data = await fetch(`${apiLink}movie/popular${apiKey}`)
            .then(r => {
                return r.json()
            })
        const results = data.results;
        setPopularFilms(writeFilmsData(results))
    }

    useEffect(() => {
        getPopularFilms().then()
        // getAllFilms().then()
    }, [])

    async function searchFilms(titleValue) {
        const data = await fetch(`${apiLink}search/movie${apiKey}&query=${titleValue}`)
            .then(r => {
                return r.json()
            })
        const results = data.results;
        setSearchResults(writeFilmsData(results));
    }

    return (
        <div className="App">
            <SearchForm searchFilm={searchFilms}/>
            <List films={searchResults}/>
            {/*<Routes>*/}
            {/*    <Route path={"/popular"}><List films={popularFilms}/></Route>*/}
            {/*    <Route path={"/searchResults"}></Route>*/}
            {/*</Routes>*/}
        </div>
    );
}

export default App;
