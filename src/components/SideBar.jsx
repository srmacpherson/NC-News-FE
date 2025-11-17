import Navigation from "./Navigation";
import Filters from "./Filters";

function SideBar({setSearchParams}) {
    return (
        <div id="sidebar">
            <Navigation />
            <Filters setSearchParams={setSearchParams}/>
        </div>
    )
}

export default SideBar;