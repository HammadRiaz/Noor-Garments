import React, { Component } from 'react';
import { useState,useContext } from 'react';
import Menu from './menuBar';
import logo from "./Images/Logo.png"
import {Link} from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai"
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AuthContext } from '../utitlities/auth-context';
import '../css/SideBar.css';
import {Animated} from "react-animated-css";

const NavBarL = props=> {
    const [click, setClick] = useState(false);
    
    const showSideBar =()=>{
        setClick(!click);
    }
    const closeMobileMenu=()=>{
        setClick(false);
    }
   // state is commented as we are later going to add a attribute whose state will update.
    const auth = useContext(AuthContext);

        return ( 
           <nav className='navbar mb-4 sticky-top shadow-lg'> 
                <Animated animationIn="bounceInLeft" animationOut="bounceInRight" isVisible={true}>
                    <Link to='/' className='navbar-logo text-decoration-none' onClick={closeMobileMenu}> 
                        <img className='mr-3' src={logo} alt="" ></img>  
                        NOOR GARMENTS
                    </Link>
                </Animated>
                <div className='menu-icon' onClick={showSideBar}>
                <i className={click ? 'fas fa-times ' : 'fas fa-bars'}/>
                </div>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {props.sideBarData.map((item, index)=>{
                        return(
                            <Animated animationIn="bounceInRight" animationOut="bounceInLeft" isVisible={true}>
                            <li key={index} className={item.cName}>
                                <Link to={item.path} className='nav-links text-decoration-none' onClick={closeMobileMenu}>
                                    {item.icon}
                                     <span> {item.title}</span>
                                </Link>
                            </li>
                            </Animated>
                            
                        )
                    })}
                    
                    <Animated animationIn="bounceInRight" animationOut="bounceInLeft" isVisible={true}>
                    <li >
                        <Link to='/'
                         onClick={closeMobileMenu}>
                        <VscAccount className='mt-4'/>
                        </Link>
                        <h6 className='text-primary mr-2 ml-2'>{auth.userName}</h6>
                    </li> 
                    </Animated>
                    <Animated animationIn="bounceInRight" animationOut="bounceInLeft" isVisible={true}>
                    {auth.isLoggedIn && (
                        <li>
                        <button className='btn text-primary mt-4' onClick={auth.logout}>LOGOUT</button>
                        </li>
                     )}
                    </Animated>
                </ul>
                
            </nav>
        );
    }

function mapStateToProps(state) {
    return({
        sideBarData: state.sideBarData
    });  
}
export default connect(mapStateToProps)(NavBarL);