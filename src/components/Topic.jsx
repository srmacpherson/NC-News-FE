import { useParams } from "react-router";
import { Link } from "react-router";
import Article from "./Article";
import Pagination from "./Pagination";

function Topic({ articles }) {
  const params = useParams();
  console.log(params.topic);

  return (
    <>
      <p>Topic</p>
      <label htmlFor="sortBy">Sort By:</label>
      <section>
        <select name="sortBy" id="sortBy">
          <option value="">--Sort by--</option>
          <option value="Date: oldest-newest">Date: oldest-newest</option>
          <option value="Date: newest-oldest">Date: newest-oldest</option>
          <option value="article id">article id</option>
        </select>
      </section>
      <section className="content-section">
        <h3>Articles</h3>
        <ul>
          {articles.map((article) => {
            if (article.topic === params.topic) {
              return (
                <Link to={`/articles/${article.article_id}`}>
                  <li className="article-li" key={article.article_id}>
                    <Article article={article} />
                  </li>
                </Link>
              );
            }
          })}
        </ul>
        <Pagination />
      </section>
    </>
  );
}

export default Topic;
