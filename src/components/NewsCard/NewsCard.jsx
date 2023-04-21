import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import newsImg from "../../assets/news.jpeg";
import { Link } from "react-router-dom";

const CardArea = styled(Card)`
  height: 500px;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid transparent;
  background-color: #F3F4F6;
  .content {
    padding: 1.1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .title {
    color: #111827;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
  }

  .desc {
    margin-top: 0.5rem;
    color: #6b7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .link {
    display: inline-flex;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    gap: 0.25rem;
    background-color: #2563eb;
    padding: 4px 8px;
    border-radius: 4px;
    text-decoration: none;
  }

  .link span {
    transition: 0.3s ease;
  }
  .link:hover span {
    transform: translateX(4px);
  }
`;

const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  width: 100%;
  img {
    width: 100%;
    height: 250px; // set a fixed height for the image
  }
`;

const NewsCard = ({ title, urlToImage, content, id }) => {
  return (
    <CardRow>
      <CardArea>
        <Card.Img
          variant="top"
          src={urlToImage ? urlToImage : newsImg}
          alt="img-news"
        />
        <Card.Body className="content">
          <Card.Title className="title">{title}</Card.Title>
          {content && (
            <Card.Text className="desc">{content.slice(0, 120)}</Card.Text>
          )}
        </Card.Body>
        <Card.Footer>
          <div className="actions d-flex justify-content-between">
            <Link
              to={{
                pathname: `/articles/${id}`,
                state: { article: { title, content, urlToImage } },
              }}
            >
              <Button variant="primary">Read more</Button>
            </Link>
          </div>
        </Card.Footer>
      </CardArea>
    </CardRow>
  );
};

export default NewsCard;
