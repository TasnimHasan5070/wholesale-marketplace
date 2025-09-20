import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import { Children } from "react";
import Home from "../page/Home";
import Catagoryproduct from "../page/Catagoryproduct";
import Update from "../page/Update";
import Add from "../page/Add";
import Allproduct from "../page/Allproduct";
import Details from "../page/Details";
import Cart from "../page/Cart";
import Login from "../page/Login";
import Registration from "../page/Registration";
import Privateroute from "./Privateroute";
import Myproduct from "../page/Myproduct";
const route=createBrowserRouter([
    {
        path:'/',
        Component:Layout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/products/:catagoryid',
                loader:({params})=>fetch(`https://wholesale-platfrom-server.vercel.app/products/${params.catagoryid}`),
                Component:Catagoryproduct
            },
            {
                path:'/products/:catagoryid/:productid',
                loader:({params})=>fetch(`https://wholesale-platfrom-server.vercel.app/products/${params.catagoryid}/${params.productid}`),
                element:<Privateroute><Update></Update></Privateroute>
            },
            {
                path:'allproducts',
                loader:()=>fetch(`https://wholesale-platfrom-server.vercel.app/products`),
                element:<Privateroute><Allproduct></Allproduct></Privateroute>
            },
            {
                path:'/add',
                element:<Privateroute><Add></Add></Privateroute>
            },
            {
               path:'/detailproducts/:catagoryid/:productid',
               element:<Privateroute><Details></Details></Privateroute>,
               loader:({params})=>fetch(`https://wholesale-platfrom-server.vercel.app/products/${params.catagoryid}/${params.productid}`),
            },
            {
                path:'/Cart',
                element:<Privateroute><Cart></Cart></Privateroute>
            },
            {
                path:'/login',
                Component:Login
            },
            {
                path:'/registration',
                Component:Registration
            },
            {
                path:'/myproduct',
                element:<Privateroute><Myproduct></Myproduct></Privateroute>
            }
        ]
    }
])
export default route;