import React, { Component } from 'react';
import Menu from './menuBar';
import logo from "./Images/Logo.png"
import {Link} from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai"
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { HiOutlineShoppingCart } from "react-icons/hi";
import {Animated} from "react-animated-css";

import '../css/SideBar.css';
class NavBarA extends Component {
   state = { 
       click:false
    }

    showSideBar =()=>{
        const click= !this.state.click;
        
        this.setState({click});
    }
    closeMobileMenu=()=>{
        const click= false;
        this.setState({click});
    }
   // state is commented as we are later going to add a attribute whose state will update.
   
   render() { 
        return ( 
           <nav className='navbar mb-4 sticky-top shadow-lg'> 
                
                    <Link to='/' className='navbar-logo text-decoration-none' onClick={this.closeMobileMenu}> 
                        <Animated animationIn="bounceInLeft" animationOut="bounceInRight" isVisible={true}>
                        <img className='mr-3 animate__animated animate__fadeInLeft' src={logo} alt="" ></img>  
                        NOOR GARMENTS
                        </Animated>
                    </Link>
               
                <div className='menu-icon' onClick={this.showSideBar}>
                <i className={this.state.click ? 'fas fa-times ' : 'fas fa-bars'}/>
                </div>
               
                <ul className={this.state.click ? 'nav-menu active' : 'nav-menu'}>
                    {this.props.sideBarData.map((item, index)=>{
                        return(
                            <Animated animationIn="bounceInRight" animationOut="bounceInLeft" isVisible={true}>
                            <li key={index} className={item.cName}>
                                
                                <Link to={item.path} className='nav-links text-decoration-none' onClick={this.closeMobileMenu}>
                                    {item.icon}
                                     <span> {item.title}</span>
                                </Link>
                                
                            </li>
                            </Animated>
                        )
                    })}
                    <li>
                    <Animated animationIn="bounceInRight" animationOut="bounceInLeft" isVisible={true}>
                    <Link to='/log-in' onClick={this.closeMobileMenu}>
                    <button className='btn text-primary mt-4'>Log In</button>
                    </Link>
                    </Animated>
                    </li>
                </ul>
                
            </nav>
        );
    }
}
 
function mapStateToProps(state) {
    return({
        sideBarData: state.sideBarData
    });  
}
export default connect(mapStateToProps)(NavBarA);