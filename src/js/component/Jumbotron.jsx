import React from "react";

const Jumbotron = () => {

    return (
        <div className="jumbotron my-3 bg-secondary bg-gradient bg-opacity-25 p-5 container-fluid">
            <h1 className="display-4">Welcome to react</h1>
            <p className="lead">React is the most popular rendering library in the world</p>
            <a className="btn btn-primary btn-lg" href="https://reactjs.org/" role="button">Go to the official website</a>
        </div>
    );

};


export default Jumbotron;