import { Link } from "react-router";

function Navigation() {
  return (
    <>
      <Link to="/articles">
        <h3 className="nav-link">ALL</h3>
      </Link>
      {/* <Link to="/articles">
        <h3>TRENDING (not done yet)</h3>
      </Link> */}
      <Link to="/topics">
        <h3 className="nav-link">TOPICS</h3>
      </Link>
    </>
  );
}

export default Navigation;
