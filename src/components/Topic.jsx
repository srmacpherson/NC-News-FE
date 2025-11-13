import { useParams, Link } from "react-router";
import { useEffect } from "react";
import Article from "./Article";
import Pagination from "./Pagination";
import { useArticles } from "../../ultils/useArticles";

function Topic({ setSearchParams }) {
  const params = useParams();

  useEffect(() => {
    setSearchParams({ topic: params.topic });
  }, [params.topic, setSearchParams]);

  const { articles, isLoading, error } = useArticles({topic: params.topic});

  if (error) return <p>Something went wrong.</p>;
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
