import Navigation from "./Navigation";
import Filters from "./Filters";

function SideBar({setSearchParams}) {
    return (
        <>
            <h2>SideBar</h2>
            <Navigation />
            <Filters setSearchParams={setSearchParams}/>
        </>
    )
}

export default SideBar;