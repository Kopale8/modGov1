import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Item1 from "./pages/Item1";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Header />
      
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/test">
            <Item1 />
          </Route>
        </Switch>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
