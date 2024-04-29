import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return <div>
        <h1>Not Found</h1>
        <p className="lead">The page cannot be found!</p>
        <Link to="/" className="btn btn-sm btn-dark">Back to the homepage</Link>
    </div>;
};

export default NotFound;
