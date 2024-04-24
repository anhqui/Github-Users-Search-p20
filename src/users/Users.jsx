import UserItem from "./UserItem";
import Spinner from "../components/layout/Spinner"
import PropTypes from "prop-types";
import { useContext } from "react";
import GithubContext from "../components/context/github/GithubContext";

const Users = () => {

    const { users, loading } = useContext(GithubContext)

    if(loading) {
        return <Spinner />
    } else {
        return <div style={userStyle}>
            {users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>;
    }
};

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem"
}


export default Users;
