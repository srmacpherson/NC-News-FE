import Navigation from "./Navigation";
import Filters from "./Filters";

function SideBar({setSearchParams}) {
    return (
        <div id="sidebar">
            <h2>SideBar</h2>
            <Navigation />
            <Filters setSearchParams={setSearchParams}/>
        </div>
    )
}

export default SideBar;