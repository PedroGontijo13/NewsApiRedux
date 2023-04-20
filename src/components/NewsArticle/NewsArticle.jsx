import React from "react";
import styled from "styled-components";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .image-container {
    margin-top: 2rem;
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .title {
    margin-top: 2rem;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 3rem;
    color: #111827;
  }

  .content {
    margin-top: 1rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #6b7280;
    width: 100%;
    max-width: 800px;
    text-align: justify;
    padding: 0 1rem;
  }
`;

const NewsArticle = (props) => {
  console.log(props.location.state.article); // Check if the state is being passed

  return (
    <Article>
      <div
        className="image-container"
        style={{
          backgroundImage: `url(${props.location.state.article.urlToImage})`,
        }}
      ></div>
      <h1 className="title">{props.location.state.article.title}</h1>
      <p className="content">{props.location.state.article.content}</p>
    </Article>
  );
};

export default NewsArticle;
