import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import axios from 'axios';
import Header from './components/Header'
import SideBar from './components/SideBar'
import Content from './components/Content'
import Spotlight from './components/Spotlight';
import './App.css'

function App() {
  const [ articles, setArticles ] = useState([])

  useEffect(() => {
    axios.get('https://nc-news-be-vwd3.onrender.com/api/articles')
    .then((res) => {
      setArticles(res.data.articles)
      console.log(res.data)
    })
    .catch((err) => {
      console.error(error);
    })
  }, [])

  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<Content articles={articles} />} />
        <Route path="/articles" element={<Content articles={articles} />} />
        <Route path="/articles/:article_id" element={<Spotlight />} />
      </Routes>
    </>
  )
}

export default App
