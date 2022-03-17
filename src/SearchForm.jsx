import {useState} from "react";

const SearchForm = ({searchFilm}) => {

    const [titleValue, setTitleValue] = useState('');
    function onSubmit(e) {
        e.preventDefault();
        searchFilm(titleValue);
        setTitleValue('');
    }

    function onChange(e) {
        setTitleValue(e.target.value)
    }

    return (
        <form onSubmit={onSubmit} className={"SearchForm"}>
            <input
                type={"text"}
                value={titleValue}
                onChange={onChange}
                placeholder={"Write title"}
            />
            <button onClick={onSubmit}>Search!</button>
        </form>
    )
}

export default SearchForm;