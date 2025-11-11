import { useEffect, useState } from "react";
import axios from "axios";

function Comment({ setComments, spotlight, comment, date, voteStyle }) {
  const [votesCount, setVotesCount] = useState(comment.votes);
  const [thumbStyleUp, setThumbStyleUp] = useState("thumbs");
  const [thumbStyleDown, setThumbStyleDown] = useState("thumbs");
  const [isDisabledUp, setIsDisabledUp] = useState(false);
  const [isDisabledDown, setIsDisabledDown] = useState(false);

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
        setVotesCount(votesCount+1);
        setThumbStyleUp("thumbs-pressed");
        setIsDisabledUp(true);
      }   
    }

    if (e.target.innerHTML === "👎") {
      if (thumbStyleUp === "thumbs-pressed") {
        setVotesCount(votesCount-2);
        setThumbStyleUp("thumbs");
        setThumbStyleDown("thumbs-pressed");
        setIsDisabledDown(true);
      } else if (thumbStyleDown === "thumbs-pressed") {
        setVotesCount(votesCount +1);
        setThumbStyleDown("thumbs");
      } else {
        setVotesCount(votesCount-1);
        setThumbStyleDown("thumbs-pressed");
        setIsDisabledDown(true);
      }   
    }

        // axios.put(`https://nc-news-be-vwd3.onrender.com/api/articles/${comment.comment_id}`, {votes: votesCount}).then((res) => {
        //     console.log(res)
        // }).catch((err) => {
        //     console.error(err)
        // }).finally(() => {
        //     setIsDisabledDown(false);
        //     setIsDisabledUp(false);
        // })

  }

  return (
    <li key={comment.comment_id} className="spotlight-comment-card">
      <p>
        <strong>{comment.author}</strong> -{" "}
        <em>{date.toLocaleString().slice(0, -3)}</em>
      </p>
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
