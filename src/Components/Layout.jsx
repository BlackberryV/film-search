import {NavLink, Outlet} from "react-router-dom";
import SearchForm from "./SearchForm";

const Layout = ({searchFilms, genresData}) => {
    return (
        <>
            <header>
                <nav>
                    <div className="dropdown">
                        <button>Genres</button>
                        <div className="dropdown-content">
                            {genresData.map(genre =>
                                <NavLink to={`genre/${genre.name}`} key={genre.id} state={{genre: genre}}>
                                    {genre.name}
                                </NavLink>)}
                        </div>
                    </div>
                    <NavLink to={"/"}>Popular</NavLink>
                    <NavLink to={"/topRated"}>Top Films</NavLink>
                </nav>
                <SearchForm searchFilms={searchFilms}/>
            </header>
            <Outlet/>
        </>
    );
}

export default Layout;