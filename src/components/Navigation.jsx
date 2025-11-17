import { Link } from "react-router";

function Navigation() {
  return (
    <section className="nav-bar">
      <Link to="/articles">
        <h3 id="all" className="nav-link">ALL</h3>
      </Link>
      {/* <Link to="/articles">
        <h3>TRENDING (not done yet)</h3>
      </Link> */}
      <Link to="/topics">
        <h3 id="topics" className="nav-link">TOPICS</h3>
      </Link>
    </section>
  );
}

export default Navigation;
