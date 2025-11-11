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
        <div className="spotlight-post-comment-card">
            <label> Leave a comment:
                <textarea type="text" />
            </label>
            

        </div>
        {comments.map((comment) => {
          const isoString = comment.created_at;
          const date = new Date(isoString);

          let voteStyle = "";
          if (comment.votes > 0) {
            voteStyle = "spotlight-vote-count-pos";
          }
          if (comment.votes < 0) {
            voteStyle = "spotlight-vote-count-neg";
          }
          if (comment.votes === 0) {
            voteStyle = "spotlight-vote-count-neu";
          }

          return (
            <li key={comment.comment_id} className="spotlight-comment-card">
              <p>
                <strong>{comment.author}</strong> -{" "}
                <em>{date.toLocaleString().slice(0, -3)}</em>
              </p>
              <p>{comment.body}</p>
              <div className="react-container">
                <button className="thumbs">{"👍"}</button>
                <button className="thumbs">{"👎"}</button>
                <p className={voteStyle}>{comment.votes}</p>
              </div>
              <div className="reply-box">
                <p className="reply-box-p-tag">reply:</p>
                <input type="text" className="reply-box-input" />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Comments;
