import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Home from './Pages/Home';
import './css/Style.css';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import ProductPage from './Pages/ProductPage';
import Cart from './Pages/Cart';

class App extends Component {
  render() { 
    return ( 
      <Router>
        <NavBar /> 
        <div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/shop/productPage" exact component={ProductPage}/>
          <Route path="/shop/productPage/Cart" exact component={Cart}/>
        </Switch>
        </div>
      </Router>
    );}
}
export default App;