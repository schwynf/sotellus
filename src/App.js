//dependencies
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux'
//components
import Header from './components/header';
import Footer from './components/footer';
import Home from "./pages/home/index";
import Beers from "./pages/beers/index";
import Login from "./pages/login/index";
import Account from "./pages/account/index";
//css
import './App.css'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: 'ADD_USER', payload: user })
    }
  }, [])

  return (
    <Router>
      <Container maxWidth="md" className="container">
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/account" component={Account} />
          <Route component={Home} />
        </Switch>
        <Footer></Footer>
      </Container>
    </Router>
  );
}

export default App;
