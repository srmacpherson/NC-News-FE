import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Comments from "./Comments"

function Spotlight() {
  const [spotlight, setSpotlight] = useState({});

  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://nc-news-be-vwd3.onrender.com/api/articles/${params.article_id}`
      )
      .then((res) => {
        setSpotlight(res.data.article);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const isoString = spotlight.created_at;
  const date = new Date(isoString);

  return (
    <article>
      <h2>{spotlight.title}</h2>
      <p>
        <em>
          {spotlight.author} - {date.toLocaleString().slice(0, -3)}
        </em>
      </p>
      <p className="article-card-topic"><span id="article-card-topic-id">{spotlight.topic}</span></p>
      <img src={spotlight.article_img_url} />
      <p>votes: {spotlight.votes} || {spotlight.comment_count} comments</p>
      <p>{spotlight.body}</p>
      <Comments spotlight={spotlight}/>
    </article>
  );
}

export default Spotlight;
