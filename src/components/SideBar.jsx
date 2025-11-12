import Navigation from "./Navigation";
import Filters from "./Filters";

function SideBar({setOrderBy, setSortBy}) {
    return (
        <>
            <h2>SideBar</h2>
            <Navigation />
            <Filters setSortBy={setSortBy} setOrderBy={setOrderBy}/>
        </>
    )
}

export default SideBar;