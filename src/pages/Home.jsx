import { Provider } from "react-redux";
import NavBar from "../components/Nav/NavBar";
import News from "../components/News/News";
import NewsCarousel from "../components/NewsCarousel/NewsCarousel";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div>
      <NavBar />
      <NewsCarousel />
      <News />
      <Footer />
    </div>
  );
}

export default Home;
