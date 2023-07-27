import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./layouts/Main";
import Auth from "./layouts/Auth";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products/index";
import { useDispatch } from "react-redux";
import { GetAuthSelector } from "./redux/selectors";
import { useEffect } from "react";
import { checkAuth } from "./redux/modules/auth/actions";
import ProtectedRoute from "./routes/ProtectedRoute";
import Categories from "./pages/Categories";
import Brands from "./pages/Brand";
import Supplier from "./pages/Supplier";
import Orders from "./pages/Orders";

function App() {
  const dispatch = useDispatch();
  const auth = GetAuthSelector();
  const { isLogin, isAdmin } = auth;
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  console.log(isLogin);
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Auth} />
        <ProtectedRoute isAdmin={isAdmin} exact path="/" component={Main} />
        <ProtectedRoute
          isAdmin={isAdmin}
          exact
          path={["/*", "/dashboard", "/products"]}
        >
          <Main>
            {/* <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/products" component={Products} /> */}
            <ProtectedRoute
              isAdmin={isAdmin}
              exact
              path="/dashboard"
              component={Dashboard}
            />
            <ProtectedRoute
              isAdmin={isAdmin}
              exact
              path="/products"
              component={Products}
            />
            <ProtectedRoute
              isAdmin={isAdmin}
              exact
              path="/categories"
              component={Categories}
            />
            <ProtectedRoute
              isAdmin={isAdmin}
              exact
              path="/brands"
              component={Brands}
            />
            <ProtectedRoute
              isAdmin={isAdmin}
              exact
              path="/supplier"
              component={Supplier}
            />
            <ProtectedRoute
              isAdmin={isAdmin}
              exact
              path="/orders"
              component={Orders}
            />
          </Main>
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
