import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header'
import SideBar from './components/SideBar'
import Content from './components/Content'
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
      <Content articles={articles} />
    </>
  )
}

export default App
