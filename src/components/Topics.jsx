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
    <>
      <h2>TOPICS:</h2>
      <section>
        <ul>
          {topics.map((topic) => {
            return (
              <li key={topic.slug}>
                <Link to={`/topics/${topic.slug}`}>
                  <h3>{topic.slug.toUpperCase()}</h3>
                  <p>{topic.description}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default Topics;
