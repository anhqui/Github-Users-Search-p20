import { useContext, useState } from "react";
import GithubContext from "../components/context/github/GithubContext";
import AlertContext from "../components/context/alert/AlertContext";

const Search = () => {
    const [text, setText] = useState('')
    const { searchUsers, clearUsers, users } = useContext(GithubContext)
    const { showAlert } = useContext(AlertContext)

    const onSubmit = (e) => {
        e.preventDefault()
        if(text === '') {
            showAlert('Please enter something', 'light')
        } else {
            searchUsers(text);
            setText("")
        }
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
        {users.length > 0 && (<button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>)}

    </div>;
};


export default Search;
