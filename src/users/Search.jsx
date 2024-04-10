import { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, clearUsers, showClear }) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        searchUsers(text);
        setText("")
    }
    const onChange = (e) => {
        setText(e.target.value)
    }

    return <div>
        <form className="form" onSubmit={onSubmit}>
            <input
                type="text"
                name="text"
                placeholder="Search Users..."
                value={text}
                onChange={onChange}
            />
            <input
                type="submit"
                value="Search"
                className="btn btn-dark btn-block"
            />
        </form>
        {showClear && (<button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>)}

    </div>;
};

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
}

export default Search;