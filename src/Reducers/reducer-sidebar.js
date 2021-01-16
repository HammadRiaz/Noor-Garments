import React, { Component } from 'react';
import * as HiIcons from "react-icons/hi";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

const SideBarReducer=()=>{
    return[
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-item'
    },
    {
        title:'Shop',
        path:'/shop',
        icon:<AiIcons.AiFillShop/>,
        cName:'nav-item'
    },{
        title:'Cart',
        path:'/shop/productPage/Cart',
        icon:<HiIcons.HiOutlineShoppingCart />,
        cName:'nav-item'
    },
    {
        title:'About',
        path:'/about',
        icon:<AiIcons.AiFillQuestionCircle/>,
        cName:'nav-item'
    }
]
}
export default SideBarReducer;