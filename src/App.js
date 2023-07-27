import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./layouts/Main";
import Auth from "./layouts/Auth";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Auth} />
        <Route exact path="/" component={Main} />
        <Route exact path={["/*", "/dashboard", "/products"]}>
          <Main>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/products" component={Products} />
          </Main>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
