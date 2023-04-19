import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewsArticle from "./components/NewsArticle/NewsArticle";
import { useSelector } from "react-redux";
import ContactPage from "./pages/Contact";
import NewsPage from "./pages/NewsPage";
import About from "./pages/About";

function App() {
  const articles = useSelector((state) => state.news.articles);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/articles/:id"
          element={<NewsArticle articles={articles} />}
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
