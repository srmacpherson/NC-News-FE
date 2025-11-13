import Article from "./Article";
import Pagination from "./Pagination";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

function Content({ searchParams, articles, setArticles }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://nc-news-be-vwd3.onrender.com/api/articles?order=${
          Object.fromEntries(searchParams.entries()).order
            ? Object.fromEntries(searchParams.entries()).order
            : "desc"
        }&sort_by=${
          Object.fromEntries(searchParams.entries()).sort_by
            ? Object.fromEntries(searchParams.entries()).sort_by
            : ""
        }`
      )
      .then((res) => {
        setArticles(res.data.articles);
      })
      .catch((err) => {
        setError(err);
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams]);

  if (error) return <p>Something went wrong.</p>;
  if (isLoading) return <p>Loading...</p>;

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
