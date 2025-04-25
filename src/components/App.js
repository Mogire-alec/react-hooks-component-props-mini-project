import React from "react";
import PropTypes from "prop-types"; // Optional
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

function App() {
  return (
    <div className="app-container">
      <Header name={blogData.name} />
      <About 
        image={blogData.image} 
        about={blogData.about} 
      />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}


export default App;

