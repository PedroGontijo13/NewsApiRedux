import { useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

export default function NewsArticle({ articles }) {
  const { id } = useParams();

  const article = articles.find((article) => article.id === id);

  return (
    <div>
    </div>
  );
}
