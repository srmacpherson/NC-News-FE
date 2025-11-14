import User from "./User";
import SearchBar from "./SearchBar";
import { Link } from "react-router";

function Header() {
    return (
        <div id="header">
            <Link to="/"><h1 id="logo" className="nav-link">NC-News</h1></Link>
            <SearchBar />
            <User />
        </div>
    )
}

export default Header;