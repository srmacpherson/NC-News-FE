import axios from "axios";
import { useState, useEffect } from "react";
import Comment from "./Comment";

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
            <Comment setComments={setComments} spotlight={spotlight} key={comment.comment_id} comment={comment} date={date} voteStyle={voteStyle}></Comment>
          );
        })}
      </ul>
    </section>
  );
}

export default Comments;
