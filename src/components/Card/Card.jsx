import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

const CardTitle = styled.h3`
  margin: 0;
`;

const CardDescription = styled.p`
  margin: 5px 0;
`;

const CardLink = styled.a`
  color: #1f6dca;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Card({ title, description, url }) {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardLink href={url}>Read more</CardLink>
    </CardContainer>
  );
}

export default Card;
