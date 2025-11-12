import { useParams } from "react-router";
import { Link } from "react-router";
import Article from "./Article";
import Pagination from "./Pagination";

function Topic({ articles }) {
  const params = useParams();

  return (
    <>      
      <section className="content-section">
        <h3>Articles</h3>
        <ul>
          {articles.map((article) => {
            if (article.topic === params.topic) {
              return (
                <li className="article-li" key={article.article_id}>
                  <Link to={`/articles/${article.article_id}`}>
                    <Article article={article} />
                  </Link>
                </li>
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
