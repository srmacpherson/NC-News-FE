function Article( {article} ) {

  const isoString = article.created_at;
  const date = new Date(isoString)

    return (
        <>
          <h2>{article.title}</h2>
          <p>Topic: {article.topic}</p>
          <p>{date.toLocaleString().slice(0, -3)}</p>
          <p>Author: {article.author}</p>
          <img src={article.article_img_url}/>
          <p>Votes: {article.votes}</p>
          <p>Comments: {article.comment_count}</p>
        </>
    )
}

export default Article;