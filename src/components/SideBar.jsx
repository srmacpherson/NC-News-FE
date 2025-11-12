import Navigation from "./Navigation";
import Filters from "./Filters";

function SideBar({setOrderBy, setSortBy, setSearchParams}) {
    return (
        <>
            <h2>SideBar</h2>
            <Navigation />
            <Filters setSortBy={setSortBy} setOrderBy={setOrderBy} setSearchParams={setSearchParams}/>
        </>
    )
}

export default SideBar;