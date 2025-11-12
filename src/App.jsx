import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import axios from 'axios';
import Header from './components/Header'
import SideBar from './components/SideBar'
import Content from './components/Content'
import Spotlight from './components/Spotlight';
import Topics from './components/Topics';
import Topic from './components/Topic';
import './App.css'

function App() {
  const [ articles, setArticles ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ error, setError] = useState(null);
  const [ orderBy, setOrderBy ] = useState("desc");
  const [ sortBy, setSortBy ] = useState("");

  

  useEffect(() => {
    axios.get(`https://nc-news-be-vwd3.onrender.com/api/articles?order=${orderBy}&sort_by=${sortBy}`)
    .then((res) => {
      setArticles(res.data.articles)
    })
    .catch((err) => {
      setError(err)
      console.error(error);
    }).finally(() => {
      setIsLoading(false)
    })
  }, [orderBy, sortBy])

  if (error) return <p>Something went wrong.</p>;
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <Header />
      <SideBar setSortBy={setSortBy} setOrderBy={setOrderBy}/>
      <Routes>
        <Route path="/" element={<Content articles={articles} />} />
        <Route path="/articles" element={<Content articles={articles} />} />
        <Route path="/articles/:article_id" element={<Spotlight />} />
        <Route path="/topics" element={<Topics />}/>
        <Route path="/topics/:topic" element={<Topic articles={articles} />}/>
      </Routes>
    </>
  )
}

export default App
