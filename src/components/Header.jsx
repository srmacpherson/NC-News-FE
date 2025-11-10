import User from "./User";
import SearchBar from "./SearchBar";

function Header() {
    return (
        <>
            <h1>NC-News</h1>
            <User />
            <SearchBar />
        </>
    )
}

export default Header;