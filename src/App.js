import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mainn from "./components/Main";
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/admin';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Mainn />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
