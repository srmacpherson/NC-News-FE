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

  function onSubmitHandler(e) {
    e.preventDefault();
    console.log(e.target[0].value);

    const payload = {
      username: "tickle122",
      body: e.target[0].value,
    };

    console.log("Payload:", payload);

    axios
      .post(
        `https://nc-news-be-vwd3.onrender.com/api/articles/${spotlight.article_id}/comments`,
        payload
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <section className="spotlight-comments-card">
      <ul>
        <form
          onSubmit={onSubmitHandler}
          action=""
          className="spotlight-post-comment-card"
        >
          <label>
            {" "}
            Leave a comment:
            <textarea type="text" name="comment" rows="4" required />
          </label>
          <button>Post</button>
        </form>

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
            <Comment
              setComments={setComments}
              spotlight={spotlight}
              key={comment.comment_id}
              comment={comment}
              date={date}
              voteStyle={voteStyle}
            ></Comment>
          );
        })}
      </ul>
    </section>
  );
}

export default Comments;
