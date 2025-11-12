import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Comments from "./Comments";

function Spotlight() {
  const [spotlight, setSpotlight] = useState({});
  const [votesCount, setVotesCount] = useState(0);
  const [thumbStyleUp, setThumbStyleUp] = useState("thumbs");
  const [thumbStyleDown, setThumbStyleDown] = useState("thumbs");
  const [isDisabledUp, setIsDisabledUp] = useState(false);
  const [isDisabledDown, setIsDisabledDown] = useState(false);
  const [ reactError, setReactError ] = useState(null);

  const isoString = spotlight.created_at;
  const date = new Date(isoString);
  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://nc-news-be-vwd3.onrender.com/api/articles/${params.article_id}`
      )
      .then((res) => {
        setSpotlight(res.data.article);
        setVotesCount(res.data.article.votes);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleClickReact(e) {
    let increment = 0;

    if (e.target.innerHTML === "Like 👍")
      if (thumbStyleDown === "thumbs-pressed") {
        setVotesCount(votesCount + 2);
        setThumbStyleDown("thumbs");
        setThumbStyleUp("thumbs-pressed");
        setIsDisabledUp(true);
        increment = 2;
      } else if (thumbStyleUp === "thumbs-pressed") {
        setVotesCount(votesCount - 1);
        setThumbStyleUp("thumbs");
        increment = -1;
      } else {
        setVotesCount(votesCount + 1);
        setThumbStyleUp("thumbs-pressed");
        setIsDisabledUp(true);
        increment = 1;
      }
    if (e.target.innerHTML === "Dislike 👎")
      if (thumbStyleUp === "thumbs-pressed") {
        setVotesCount(votesCount - 2);
        setThumbStyleUp("thumbs");
        setThumbStyleDown("thumbs-pressed");
        setIsDisabledDown(true);
        increment = -2;
      } else if (thumbStyleDown === "thumbs-pressed") {
        setVotesCount(votesCount + 1);
        setThumbStyleDown("thumbs");
        increment = 1;
      } else {
        setVotesCount(votesCount - 1);
        setThumbStyleDown("thumbs-pressed");
        setIsDisabledDown(true);
        increment = -1;
      }
    setIsDisabledDown(false);
    setIsDisabledUp(false);

    const payload = { inc_votes: increment };

    axios
      .put(
        `https://nc-news-be-vwd3.onrender.com/api/articles/${spotlight.article_id}`,
        payload
      )
      .then((res) => {
        setVotesCount(res.data.article.votes);
      })
      .catch((err) => {
        console.error(err);
        setReactError(true)
        setVotesCount("-")
      });
  }

  return (
    <article>
      <h2>{spotlight.title}</h2>
      <p>
        <em>
          {spotlight.author} - {date.toLocaleString().slice(0, -3)}
        </em>
      </p>
      <p className="article-card-topic">
        <span id="article-card-topic-id">{spotlight.topic}</span>
      </p>
      <img src={spotlight.article_img_url} />
      <p>
        votes: {votesCount} || {spotlight.comment_count} comments
      </p>
      <button
        className={thumbStyleUp}
        disabled={isDisabledUp}
        onClick={handleClickReact}
      >
        {"Like 👍"}
      </button>
      <button
        className={thumbStyleDown}
        disabled={isDisabledDown}
        onClick={handleClickReact}
      >
        {"Dislike 👎"}
      </button>
      {reactError ? <em> Could not react...</em> : ""}
      <p>{spotlight.body}</p>
      <Comments spotlight={spotlight} />
    </article>
  );
}

export default Spotlight;
