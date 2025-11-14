import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios
      .get(`https://nc-news-be-vwd3.onrender.com/api/topics`)
      .then((res) => {
        setTopics(res.data.topics);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div id="topics-container">
      <h3 id="topics-title">TOPICS:</h3>
      <section id="topics-topics">
        <ul id="topic-container">
          {topics.map((topic) => {
            return (
              <Link to={`/topics/${topic.slug}`}>
                <li className="topic-item" key={topic.slug}>
                  <h4>{topic.slug.toUpperCase()}</h4>
                  <p>{topic.description}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Topics;
