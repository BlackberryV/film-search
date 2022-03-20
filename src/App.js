import {useEffect, useState} from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import List from "./Components/List";
import FilmPage from "./Components/FilmPage";
import Layout from "./Components/Layout";

function App() {

    const apiLink = 'https://api.themoviedb.org/3/';
    const apiKey = '?api_key=161efc4a60078fa99ee9f7500b81f9e1';

    const [popularFilms, setPopularFilms] = useState([]);
    const [topRatedFilms, setTopRatedFilms] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [genresData, setGenresData] = useState([]);

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
                originalLang: results[key].original_language,
            })
        }
        return filmsArr;
    }

    async function getPopularFilms() {
        const data = await fetch(`${apiLink}movie/popular${apiKey}`)
            .then(r => {
                return r.json()
            })
        setPopularFilms(writeFilmsData(data.results))
    }

    async function getTopRatedFilms() {
        const data = await fetch(`${apiLink}movie/top_rated${apiKey}`)
            .then(r => {
                return r.json()
            })
        setTopRatedFilms(writeFilmsData(data.results))
    }

    async function getGenres() {
        const data = await fetch(`${apiLink}genre/movie/list${apiKey}`)
            .then(r => {
                return r.json()
            })
        setGenresData(data.genres)
    }

    async function getFilmsByGenre(id) {

    }

    useEffect(() => {
        getPopularFilms().then();
        getTopRatedFilms().then();
        getGenres().then();
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
            <Routes>
                <Route path={"/"} element={<Layout searchFilms={searchFilms} genresData={genresData}/>}>
                    <Route path={"/"} index element={<List films={popularFilms}/>}/>
                    <Route path={"/topRated"} element={<List films={topRatedFilms}/>}/>
                    <Route path={"/:genre"} element={<List films={searchResults}/>}/>
                    <Route path={"/searchResults"} element={<List films={searchResults}/>}/>
                    <Route path={"/film/:id"} element={<FilmPage/>}/>
                    <Route path={"/genre/:genre"} element={<p>hello i'm working</p>}/>
                    <Route path={"*"} element={<Navigate to={"/"}/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
