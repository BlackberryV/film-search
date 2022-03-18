import {useState} from "react";
import {useNavigate} from "react-router-dom";

const SearchForm = ({searchFilm}) => {
    let navigate = useNavigate();
    const [titleValue, setTitleValue] = useState('');

    async function onSubmit(e) {
        e.preventDefault();
        if (titleValue) {
            searchFilm(titleValue);
            navigate("/searchResults", {replace: true})
            setTitleValue('');
        } else {
            navigate("/", {replace: true})
        }
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