import FilmItem from "./FilmItem";

const List = ({films}) => {
    return (
        <div className={"film-items_container"} id={"popular-films"}>
            {films.map((film) => (<FilmItem key={film.title} film={film}/>))}
        </div>
    )
}

export default List;