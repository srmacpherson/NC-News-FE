import Comments from "./Comments";

function Article( {article} ) {
    return (
        <>
          <p>{article.title}</p>
          <p>Topic: {article.topic}</p>
          <p>{article.created_at}</p>
          <p>Author: {article.author}</p>
          <img src={article.article_img_url}/>
          <p>Votes: {article.votes}</p>
          <p>Comments: {article.comment_count}</p>
          <Comments/>
        </>
    )
}

export default Article;