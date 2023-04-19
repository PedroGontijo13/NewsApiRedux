import { useState } from "react";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import axios from "axios";
import Card from "../Card/Card";

const NavContainer = styled.div`
  ul {
    align-items: center;
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #1f6dca;
    justify-content: center; /* Add this line */
  }

  nav {
    background-color: #1f6dca;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #1f6fff;
  }

  li:last-child {
    margin-left: auto;
  }

  @media screen and (max-width: 600px) {
    ul {
      display: ${({ isMobileMenuOpen }) =>
        isMobileMenuOpen ? "flex" : "none"};
      flex-direction: column;
      align-items: center;
    }

    li {
      float: none;
      margin-left: 0;
    }
    li:last-child {
      margin-left: 0;
    }
  }
`;

const SearchBar = styled.input`
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  border: none;
  width: 300px;

  /* Add mobile responsiveness */
  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

const MenuButton = styled.button`
  display: none;
  background-color: #1f6dca;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 14px 16px;

  /* Add mobile responsiveness */
  @media screen and (max-width: 600px) {
    display: block;
  }
`;

const SearchButton = styled.button`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(105, 105, 209, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  border-radius: 20px;
  margin: 5px 10px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 14px 16px;
`;

const SearchContainer = styled.li`
  display: flex;
  align-items: center;
`;

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevIsMobileMenuOpen) => !prevIsMobileMenuOpen);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=4f149de8d35945bb91dddfd36d5f6002`
    );
    setSearchResults(response.data.articles);
    setShowSearchResults(true);
  };

  const handleCloseSearchResults = () => {
    setShowSearchResults(false);
  };

  return (
    <NavContainer isMobileMenuOpen={isMobileMenuOpen}>
      <nav>
        <MenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? "Close" : "Menu"}
        </MenuButton>
        <ul>
          <li>
            <a className="active" href="/">
              Home
            </a>
          </li>
          <li>
            <a href="news">News</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>

          <SearchContainer>
            <SearchBar
              type="text"
              placeholder="Search news"
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
            <SearchButton onClick={handleSearchSubmit}>Search</SearchButton>
          </SearchContainer>
        </ul>
      </nav>
      <Modal show={showSearchResults} onHide={handleCloseSearchResults}>
        <Modal.Header closeButton>
          <Modal.Title>Search Results</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Body>
            {searchResults.length > 0 ? (
              <div>
                {searchResults.map((result) => (
                  <Card
                    key={result.title}
                    title={result.title}
                    description={result.description}
                    url={result.url}
                  />
                ))}
              </div>
            ) : (
              <p>No results found.</p>
            )}
          </Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSearchResults}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </NavContainer>
  );
}
