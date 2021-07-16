import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bulma-components"

import "../app.css";

const Home = () => {

        return (
            <div className="App">
              <h1>Hello</h1>
                <h1>See different postings for van parking spots in the following cities: </h1>
                <Link to="/cities/1">
                <Button color="purple" className="is-rounded">
                  <span>Denver, CO</span>
                </Button>
                </Link>
                {/* <Link to="/cities/2">
                <Button color="purple" className="is-rounded">
                  <span>Portland, OR</span>
                </Button>
                </Link>
                <Link to="/cities/3">
                <Button color="purple" className="is-rounded">
                  <span>San Diego, CA</span>
                </Button>
                </Link>
                <Link to="/cities/4">
                <Button color="purple" className="is-rounded">
                  <span>Austin, TX</span>
                </Button>
                </Link> */}
            </div>
        );
};



export default Home;