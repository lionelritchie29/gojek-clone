import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/products">
            <Product />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
