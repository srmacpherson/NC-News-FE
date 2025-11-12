import { useEffect, useState } from "react";
import axios from "axios";

function Comment({ comment, date, voteStyle }) {
  const [votesCount, setVotesCount] = useState(comment.votes);
  const [thumbStyleUp, setThumbStyleUp] = useState("thumbs");
  const [thumbStyleDown, setThumbStyleDown] = useState("thumbs");
  const [isDisabledUp, setIsDisabledUp] = useState(false);
  const [isDisabledDown, setIsDisabledDown] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [error, setError] = useState(null);

  function handleClickDelete(e) {
    setIsDeleting(true);

    axios
      .delete(
        `https://nc-news-be-vwd3.onrender.com/api/comments/${comment.comment_id}`
      )
      .then((res) => {
        console.log(res);
        setIsDeleting(false);
        setIsDeleted(true);
      })
      .catch((err) => {
        console.error(err);
        setIsDeleting(false);
        setError(err);
      });
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3000);
    return () => clearTimeout(timer);
  }, [isDeleted])

  function handleClickVote(e) {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === "👍") {
      if (thumbStyleDown === "thumbs-pressed") {
        setVotesCount(votesCount + 2);
        setThumbStyleDown("thumbs");
        setThumbStyleUp("thumbs-pressed");
        setIsDisabledUp(true);
      } else if (thumbStyleUp === "thumbs-pressed") {
        setVotesCount(votesCount - 1);
        setThumbStyleUp("thumbs");
      } else {
        setVotesCount(votesCount + 1);
        setThumbStyleUp("thumbs-pressed");
        setIsDisabledUp(true);
      }
    }

    if (e.target.innerHTML === "👎") {
      if (thumbStyleUp === "thumbs-pressed") {
        setVotesCount(votesCount - 2);
        setThumbStyleUp("thumbs");
        setThumbStyleDown("thumbs-pressed");
        setIsDisabledDown(true);
      } else if (thumbStyleDown === "thumbs-pressed") {
        setVotesCount(votesCount + 1);
        setThumbStyleDown("thumbs");
      } else {
        setVotesCount(votesCount - 1);
        setThumbStyleDown("thumbs-pressed");
        setIsDisabledDown(true);
      }
    }

    setIsDisabledDown(false);
    setIsDisabledUp(false);
    // axios.put(`https://nc-news-be-vwd3.onrender.com/api/articles/${comment.comment_id}`, {votes: votesCount}).then((res) => {
    //     console.log(res)
    // }).catch((err) => {
    //     console.error(err)
    // }).finally(() => {
    //     setIsDisabledDown(false);
    //     setIsDisabledUp(false);
    // })
  }

  if (isDeleting) return <div>Deleting comment...</div>;
  if (isDeleted) return isVisible && <div className="fade-out-delete"><p>Comment deleted.</p></div>; 

  return (
    <li key={comment.comment_id} className="spotlight-comment-card">
      <p>
        <strong>{comment.author}</strong> -{" "}
        <em>{date.toLocaleString().slice(0, -3)}</em>
      </p>
      {comment.author === "tickle122" ? (
        <button onClick={handleClickDelete}>Remove</button>
      ) : (
        ""
      )}
      {error ? " Failed to delete comment." : ""}
      <p>{comment.body}</p>
      <div className="react-container">
        <button
          className={thumbStyleUp}
          onClick={handleClickVote}
          disabled={isDisabledUp}
        >
          {"👍"}
        </button>
        <button
          className={thumbStyleDown}
          onClick={handleClickVote}
          disabled={isDisabledDown}
        >
          {"👎"}
        </button>
        <p className={voteStyle}>{votesCount}</p>
      </div>
      <div className="reply-box">
        <p className="reply-box-p-tag">reply:</p>
        <input type="text" className="reply-box-input" />
      </div>
    </li>
  );
}

export default Comment;
