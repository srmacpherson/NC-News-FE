import Navigation from "./Navigation";
import Filters from "./Filters";

function SideBar({setSortByDate}) {
    return (
        <>
            <h2>SideBar</h2>
            <Navigation />
            <Filters setSortByDate={setSortByDate}/>
        </>
    )
}

export default SideBar;