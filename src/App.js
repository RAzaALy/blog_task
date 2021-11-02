import { Switch, Route } from "react-router-dom";
import {
  Navbar,
  Home,
  Contact,
  About,
  Services,
  Blog,
  BlogDetails,
  Footer,
} from "./components";
import "./App.css";
 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/blog/:id">
                <BlogDetails />
              </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
