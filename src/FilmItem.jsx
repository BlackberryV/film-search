const FilmItem = ({film}) => {
    return (
        <div key={film.title}>
            <div><img src={`https://image.tmdb.org/t/p/original/${film.poster}`}/>{film.poster}</div>
            <div>{film.title}</div>
            <div>{film.overview}</div>
        </div>
    )
}

export default FilmItem;