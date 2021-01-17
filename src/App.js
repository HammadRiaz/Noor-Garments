import React, { useState, useCallback, useContext } from 'react';
import './App.css';
import NavBarA from './components/navBarA';
import NavBarL from './components/navBarL';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Home from './Pages/Home';
import Login from './Pages/LogIn';
import './css/Style.css';
import {BrowserRouter as Router, Switch , Route, Redirect} from 'react-router-dom';
import ProductPage from './Pages/ProductPage';
import Cart from './Pages/Cart';
import { AuthContext } from './utitlities/auth-context';
import Cookies from 'js-cookie';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);
  const [userName, setUserName] = useState(false);
  const [cart, setCart] = useState(false);
  const auth = useContext(AuthContext);

  
  const login = useCallback((uid,Name,Cart) => {
      setIsLoggedIn(true);
      setUserId(uid);
      setUserName(Name);
      setCart(Cart); 
      Cookies.set("isLoggedIn","true", { expires: 2 });
    }, []);
  
    const myCookieForLogin= Cookies.get("isLoggedIn");
    if(myCookieForLogin){
      console.log(auth.isLoggedIn);
    }

  const logout = useCallback(() => {
      setIsLoggedIn(false);
      setUserId(null);
      setUserName(null);
      setCart(null);
      Cookies.set("isLoggedIn","false");
    }, []);
   
  let routes;  
    if (isLoggedIn) {
      routes = (
        <Router>
        <NavBarL />
        <Switch>

        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/shop" exact component={Shop}/>
        <Route path="/shop/productPage" exact component={ProductPage}/>
        <Route path="/shop/productPage/Cart" exact component={Cart}/>
        <Redirect to='/'></Redirect>
      </Switch>
      </Router>
      );
    } else {
      routes = (
        <Router>
        <NavBarA />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/shop/productPage" exact component={ProductPage}/>
          <Route path='/log-in' exact component={Login} />
          <Redirect to='/log-in'></Redirect>
        </Switch>
        </Router>
      );
    }
    return (
      
      <div>
      <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, Cart:cart , userId:userId , userName:userName, login: login, logout: logout }}
      >
        <main>{routes}</main>
      </AuthContext.Provider>
      </div>
      
    );
  }

export default App;