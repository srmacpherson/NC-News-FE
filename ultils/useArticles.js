import { useState, useEffect } from "react";
import axios from "axios";

export function useArticles(params) {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        setIsLoading(true);
        setError(null);

        axios.get("https://nc-news-be-vwd3.onrender.com/api/articles", { params }).then((res) => {
            setArticles(res.data.articles);
        }).catch((err) => {
            setError(err);
            console.error(err);
        }).finally(() => {
            setIsLoading(false);
        })
    }, [JSON.stringify(params)]);

    return { articles, isLoading, error };
}

