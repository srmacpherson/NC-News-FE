import axios from "axios";
import { useState, useEffect } from "react";
import Comment from "./Comment";

function Comments({ spotlight }) {
  const [comments, setComments] = useState([]);
  const [textVal, setTextVal] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!spotlight?.article_id) return;
    axios
      .get(
        `https://nc-news-be-vwd3.onrender.com/api/articles/${spotlight.article_id}/comments`
      )
      .then((res) => {
        setComments(res.data.comments);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      }).finally(() => {
        setIsLoading(false);
      });
  }, [spotlight]);

  function onSubmitHandler(e) {
    e.preventDefault();
    setIsPosting(true);

    const payload = {
      username: "tickle122",
      body: e.target[0].value,
    };

    axios
      .post(
        `https://nc-news-be-vwd3.onrender.com/api/articles/${spotlight.article_id}/comments`,
        payload
      )
      .then((res) => {
        const newComment = res.data.comment;
        setTextVal("");
        setComments((prevComments) => [newComment, ...prevComments]);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setIsPosting(false);
      });
  }

  if (isLoading) return <p>Loading comments...</p>;

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
            <textarea
              type="text"
              value={textVal}
              onChange={(e) => setTextVal(e.target.value)}
              name="comment"
              rows="4"
              required
            />
          </label>
          <button disabled={!textVal.trim() || isPosting}>
            {isPosting ? "Posting..." : "Post"}
          </button>
          <p>{error ? "Comment failed to post..." : ""}</p>
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
