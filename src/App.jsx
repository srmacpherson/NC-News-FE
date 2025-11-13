import { useState } from "react";
import { Routes, Route, useSearchParams } from "react-router";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import Spotlight from "./components/Spotlight";
import Topics from "./components/Topics";
import Topic from "./components/Topic";
import My404Component from "./components/My404Component";
import "./App.css";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState([]);

  return (
    <>
      <Header />
      <SideBar setSearchParams={setSearchParams} />
      <Routes>
        <Route
          path="/"
          element={
            <Content
              articles={articles}
              setArticles={setArticles}
              searchParams={searchParams}
            />
          }
        />
        <Route
          path="/articles"
          element={
            <Content
              articles={articles}
              setArticles={setArticles}
              searchParams={searchParams}
            />
          }
        />
        <Route path="/articles/:article_id" element={<Spotlight />} />
        <Route path="/topics" element={<Topics />} />
        <Route
          path="/topics/:topic"
          element={
            <Topic
              articles={articles}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          }
        />
        <Route path="*" element={<My404Component searchParams={searchParams}/>} />
      </Routes>
    </>
  );
}

export default App;
