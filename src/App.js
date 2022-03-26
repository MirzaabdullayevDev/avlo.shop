import Layout from "./hoc/Layout/Layout";
// import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Opportunity from "./containers/Opportunity/Opportunity";
import About from "./containers/About/About";
import { Route, Switch } from "react-router-dom";
import Contact from "./containers/Contact/Contact";

function App(props) {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/opportunity" component={Opportunity} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
