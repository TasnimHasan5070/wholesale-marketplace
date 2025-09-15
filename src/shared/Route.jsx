import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import { Children } from "react";
import Home from "../page/Home";
import Catagoryproduct from "../page/Catagoryproduct";
import Update from "../page/Update";
import Add from "../page/Add";
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
                path:'/add',
                Component:Add
            }
        ]
    }
])
export default route;