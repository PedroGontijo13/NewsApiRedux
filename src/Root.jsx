import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Nav/NavBar";
import store from "./store/store";
import Footer from "./components/Footer/Footer";
import NewsArticle from "./components/NewsArticle/NewsArticle";
import Home from "./pages/Home";

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/article/:id">
            <NewsArticle />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default Root;
