import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import NavBar from "../components/Nav/NavBar";
import Footer from "../components/Footer/Footer";

const ArticleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
`;

const ArticleCard = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .article-image {
    width: 100%;
    margin-bottom: 16px;
  }

  .article-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .article-content {
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

const ArticlePage = () => {
  const location = useLocation();
  const articleId = location.state?.id;
  const articles = useSelector((state) => state.news.articles);
  const article = articles?.find((article) => article.id === articleId);

  return (
    <>
      <NavBar />
      <ArticleContainer>
        <ArticleCard>
          {article ? (
            <>
              <h2>{article.title}</h2>
              {article.urlToImage && (
                <img src={article.urlToImage} style={{width: '100%'}} alt="article" />
              )}
              <p>{article.content}</p>
            </>
          ) : (
            <p>No article found</p>
          )}
        </ArticleCard>
      </ArticleContainer>
      <Footer />
    </>
  );
};

export default ArticlePage;
