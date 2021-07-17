import React from "react";
import { Link } from "react-router-dom";

import "../app.css";

const Home = (posts) => {

        return (
            <div className="App">
                <h1>See different postings for van parking spots in the following cities: </h1>
                <Link to="/cities/1">
                Denver, CO
                </Link>
                <br></br>
                <Link to="/cities/2">
                Portland, OR
                </Link>
                <br></br>
                <Link to="/cities/3">
                San Diego, CA
                </Link>
                <br></br>
                <Link to="/cities/4">
                Austin, TX
                </Link>
            </div>
        );
};



export default Home;