import SearchForm from "./Components/SearchForm";
import {useEffect, useState} from "react";
import {Route, Routes, Navigate, Link} from "react-router-dom";
import List from "./Components/List";
import FilmPage from "./Components/FilmPage";

function App() {

    const apiLink = 'https://api.themoviedb.org/3/';
    const apiKey = '?api_key=161efc4a60078fa99ee9f7500b81f9e1';

    const [popularFilms, setPopularFilms] = useState([]);
    const [topRatedFilms, setTopRatedFilms] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    function writeFilmsData(results) {
        let filmsArr = []
        for (const key in results) {
            filmsArr.push({
                id: results[key].id,
                adult: results[key].adult,
                poster: results[key].poster_path,
                rating: results[key].vote_average,
                title: results[key].title,
                overview: results[key].overview,
                originalLang: results[key].original_language
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

    async function getTopRatedFilms() {
        const data = await fetch(`${apiLink}movie/top_rated${apiKey}`)
            .then(r => {
                return r.json()
            })
        const results = data.results;
        setTopRatedFilms(writeFilmsData(results))
    }

    useEffect(() => {
        getPopularFilms().then();
        getTopRatedFilms().then();
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
            <header>
                <nav>
                    <Link to={"/"}>Popular</Link>
                    <Link to={"/topRated"}>Top Films</Link>
                </nav>
                <SearchForm searchFilm={searchFilms}/>
            </header>
            <Routes>
                <Route path={"/"} element={<List films={popularFilms}/>}/>                  //popular
                <Route path={"/topRated"} element={<List films={topRatedFilms}/>}/>         //new
                <Route path={"/searchResults"} element={<List films={searchResults}/>}/>
                <Route path={"/film/:id"} element={<FilmPage/>}/>
                <Route path={"*"} element={<Navigate to={"/"}/>}/>
            </Routes>
        </div>
    );
}

export default App;
