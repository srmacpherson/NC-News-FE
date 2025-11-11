import axios from "axios";
import { useState, useEffect } from "react";

function Comments({ spotlight }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!spotlight?.article_id) return;
    axios
      .get(
        `https://nc-news-be-vwd3.onrender.com/api/articles/${spotlight.article_id}/comments`
      )
      .then((res) => {
        setComments(res.data.comments);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [spotlight]);

  return (
    <section className="spotlight-comments-card">
      <ul>
        {comments.map((comment) => {
            const isoString = comment.created_at;
            const date = new Date(isoString);
          return (
          <li key={comment.comment_id} className="spotlight-comment-card">
            <p><strong>{comment.author}</strong> - <em>{date.toLocaleString().slice(0, -3)}</em></p>
            <p>{comment.body}</p>
            <p>{comment.votes}</p>
          </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Comments;
