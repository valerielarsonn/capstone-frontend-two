import React from "react";
import { Link } from "react-router-dom";

import '../styles.scss';

const Home = (posts) => {

        return (
            <div className="home">
                <h1>LOOK THROUGH POSTINGS ON SPOTS YOU CAN PARK YOUR HOME</h1>
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