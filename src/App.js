import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Banner from './components/Banner';
import Header from './components/Header'
import Checkout from './components/Checkout'
import Home from './components/Home'
import Login from './components/Login'



const App = () =>{ 
  return (
    <Router>
    <div className="App">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Banner />
             <Home />
          </Route>   
        </Switch>
    </div>
    </Router>
  );
}

export default App;
