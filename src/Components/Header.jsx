import {NavLink} from "react-router-dom";
import SearchForm from "./SearchForm";

const Header = ({searchFilms}) => {
  return (
      <header>
          <nav>
              <div className="dropdown">
                  <button>Genres</button>
                  <div className="dropdown-content">
                      <NavLink to={"/drama"} >Drama</NavLink>
                      <NavLink to={"/action"}>Action</NavLink>
                      <NavLink to={"/horror"}>Horror</NavLink>
                      <NavLink to={"/fantasy"}>Fantasy</NavLink>
                      <NavLink to={"/adventure"}>Adventure</NavLink>
                  </div>
              </div>
              <NavLink to={"/"}>Popular</NavLink>
              <NavLink to={"/topRated"}>Top Films</NavLink>
          </nav>
          <SearchForm searchFilms={searchFilms}/>
      </header>
  );
}

export default Header;