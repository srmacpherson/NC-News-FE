import Article from "./Article";
import Pagination from "./Pagination";
import { Link } from "react-router";

function Content({ articles }) {
  return (
    <section className="content-section">
      <h3>Articles</h3>
      <ul>
        {articles.map((article) => {
          return (
            <li className="article-li" key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <Article article={article} />
              </Link>
            </li>
          );
        })}
      </ul>
      <Pagination />
    </section>
  );
}

export default Content;
