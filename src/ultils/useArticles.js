import { useState, useEffect } from "react";
import axios from "axios";

export function useArticles(searchParams = {}, overrides = {}) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const params = { ...searchParams, ...overrides };

    axios
      .get("https://nc-news-be-vwd3.onrender.com/api/articles", { params })
      .then((res) => {
        setArticles(res.data.articles);
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [JSON.stringify(searchParams), JSON.stringify(overrides)]);

  return { articles, isLoading, error };
}
