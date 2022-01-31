import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import useAuth from "./hooks/useAuth";
import Login from "./pages/Login/loginIndex";
import Home from "./pages/Home/homeIndex";
import Registration from "./pages/Registration/registrationIndex";
import ModalDelete from "./components/ModalDelete";

function App() {
  function ProtectedRoutes(props) {
    const { token } = useAuth();
    //Validar o token
    return (
      <Route
        render={() => (token ? props.children : <Redirect to="/login" />)}
      />
    );
  }
  return (
    <div className="App">
    <ModalDelete/>
      {/* <Router>
        <Switch>
          <AuthContextProvider>
            <ProtectedRoutes>
              <Route path="/home" exact component={Home} />
            </ProtectedRoutes>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Registration} />
          </AuthContextProvider>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
