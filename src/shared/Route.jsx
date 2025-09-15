import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import { Children } from "react";
import Home from "../page/Home";
import Catagoryproduct from "../page/Catagoryproduct";
import Update from "../page/Update";
import Add from "../page/Add";
import Allproduct from "../page/Allproduct";
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
                loader:({params})=>fetch(`http://localhost:3000/products/${params.catagoryid}`),
                Component:Catagoryproduct
            },
            {
                path:'/products/:catagoryid/:productid',
                loader:({params})=>fetch(`http://localhost:3000/products/${params.catagoryid}/${params.productid}`),
                Component:Update
            },
            {
                path:'allproducts',
                loader:()=>fetch(`http://localhost:3000/products`),
                Component:Allproduct
            }
        ]
    }
])
export default route;