import { Link } from "react-router";

function Article( {article} ) {

  const isoString = article.created_at;
  const date = new Date(isoString)

    return (
        <article className="article-card">
          <img className="article-card-img" src={article.article_img_url} alt={article.topic}/>
          <h2 className="article-card-title"><span id="article-card-title-id">{article.title}</span></h2>
          <p className="article-card-votes">Votes: {article.votes}</p>
          <p className="article-card-comments">Comments: {article.comment_count}</p>
          <p className="article-card-author"><em>Author: {article.author}</em></p>
          <p className="article-card-topic">
            {/* <Link to={`/topics/${article.topic}`}> */}
            <span id="article-card-topic-id">{article.topic.toUpperCase()}</span>
            {/* </Link> */}
            </p>
          <p className="article-card-date">{date.toLocaleString().slice(0, -3)}</p>
        </article>
    )
}

export default Article;