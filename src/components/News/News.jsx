import { useDispatch, useSelector } from "react-redux";
import { setArticles } from "../../redux/newsSlice";
import styled from "styled-components";
import NewsCard from "../NewsCard/NewsCard";
import { useEffect } from "react";

const NewsContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  grid-template-rows: 1fr;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    grid-column: span 2;
  }
`;

export default function News() {
  const articles = useSelector((state) => state.news.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=4f149de8d35945bb91dddfd36d5f6002"
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(setArticles(data.articles));
      });
  }, [dispatch]);

  return (
    <NewsContainer>
      {articles &&
        articles
          .slice(0, 6)
          .map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              content={article.content}
              urlToImage={article.urlToImage}
              id={article.source.id || index}
            />
          ))}
    </NewsContainer>
  );
}
