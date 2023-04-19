import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #1f6dca;
  color: #fff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.p`
  margin: 0;

  @media (max-width: 767px) {
    &:first-child {
      display: none;
    }
  }
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2023 My Website</FooterText>
      <FooterText>
        Made with Coffee and Code by{" "}
        <FooterLink href="https://github.com/PedroGontijo13">
          PedroGont
        </FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
