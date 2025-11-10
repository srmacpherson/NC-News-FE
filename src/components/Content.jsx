import Article from "./Article";
import Pagination from "./Pagination";

function Content({ articles }) {
  return (
    <>
      <h3>Content</h3>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <Article article={article} />
            </li>
          );
        })}
      </ul>
      <Pagination />
    </>
  );
}

export default Content;
