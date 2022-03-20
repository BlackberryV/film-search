import {useState} from "react";
import {useNavigate} from "react-router-dom";

const SearchForm = ({searchFilms}) => {
    let navigate = useNavigate();
    const [titleValue, setTitleValue] = useState('');

    async function onSubmit(e) {
        e.preventDefault();
        if (titleValue) {
            searchFilms(titleValue);
            navigate("/searchResults", {replace: false})
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