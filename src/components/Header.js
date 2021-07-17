import { Link } from "react-router-dom";
import {Navbar} from "react-bulma-components";

function Header(props){

    return(
        <Navbar className="header">
            <Link className="nav-link" to="/cities">
                Home
            </Link>
        </Navbar>
    )
};

export default Header;