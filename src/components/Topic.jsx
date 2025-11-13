import { useParams, Link } from "react-router";
import Article from "./Article";
import Pagination from "./Pagination";
import { useArticles } from "../../ultils/useArticles";

function Topic({ searchParams }) {
  const params = useParams();

  const { articles, isLoading, error } = useArticles(
    Object.fromEntries(searchParams.entries()),
    { topic: params.topic }
  );

  if (error) return <p>Topic Not Found.</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="content-section">
      <h3>Articles</h3>
      <ul>
        {articles.map((article) => (
          <li className="article-li" key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
              <Article article={article} />
            </Link>
          </li>
        ))}
      </ul>
      <Pagination />
    </section>
  );
}

export default Topic;
