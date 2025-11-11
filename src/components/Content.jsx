import Article from "./Article";
import Pagination from "./Pagination";

function Content({ articles }) {
  return (
    <section className="content-section">
      <h3>Articles</h3>
      <ul>
        {articles.map((article) => {
          return (
            <li className="article-li" key={article.article_id}>
              <Article article={article} />
            </li>
          );
        })}
      </ul>
      <Pagination />
    </section>
  );
}

export default Content;
