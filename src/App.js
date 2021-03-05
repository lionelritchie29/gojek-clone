import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/products">
            <Product />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
