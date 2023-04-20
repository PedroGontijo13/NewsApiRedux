import { useLocation } from "react-router-dom";

const ArticlePage = () => {
  const location = useLocation();
  const article = location.state?.article;

  return (
    <div>
      {article ? (
        <div>
          <h2>{article.title}</h2>
          {article.urlToImage && <img src={article.urlToImage} alt="article" />}
          <p>{article.content}</p>
        </div>
      ) : (
        <p>No article found</p>
      )}
    </div>
  );
};

export default ArticlePage;
