import {useState} from "react";

const SearchForm = () => {

    const [titleValue, setTitleValue] = useState('');
    function onSubmit(e) {
        e.preventDefault();
        console.log(titleValue)
        setTitleValue('');
    }

    function onChange(e) {
        setTitleValue(e.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
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