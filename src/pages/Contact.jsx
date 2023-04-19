import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Nav/NavBar";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f9fafb;
  min-height: 100vh;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;

const ContactInput = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #d1d5db;
  font-size: 1rem;
`;

const ContactTextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #d1d5db;
  font-size: 1rem;
`;

const ContactButton = styled.button`
  background-color: #2563eb;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
`;

const FooterWrapper = styled.div`
  margin-top: auto;
`;

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Sent")
  };

  return (
    <div>
      <NavBar />
      <ContactContainer>
        <h1>Contact Us</h1>
        <ContactForm onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <ContactInput type="text" id="name" name="name" required />
          <label htmlFor="email">Email</label>
          <ContactInput type="email" id="email" name="email" required />
          <label htmlFor="message">Message</label>
          <ContactTextArea id="message" name="message" rows="5" required />
          <ContactButton type="submit">Send</ContactButton>
        </ContactForm>
      </ContactContainer>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </div>
  );
};

export default ContactPage;
