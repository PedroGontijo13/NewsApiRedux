import React from "react";
import { useSelector } from "react-redux";
import { selectArticles } from "../../redux/newsSlice";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import newsBg from "../../assets/news.jpeg";
import styled from "styled-components";
const CarouselText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(105, 105, 209, 1) 32%,
    rgba(0, 212, 255, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
`;

const NewsCarousel = () => {
  const articles = useSelector(selectArticles);

  if (!articles || !articles.length) {
    return null; // or some other placeholder component
  }

  return (
    <Carousel>
      {articles.slice(0, 3).map((article) => (
        <Carousel.Item
          key={article.title}
          style={{
            background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${
              article.urlToImage ? article.urlToImage : newsBg
            }) no-repeat center center`,
            backgroundSize: "cover",
            color: "#fff",
            height: "500px",
            padding: "50px",
          }}
        >
          <CarouselText>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </CarouselText>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default NewsCarousel;
