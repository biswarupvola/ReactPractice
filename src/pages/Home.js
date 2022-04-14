import React, {useState,useEffect} from "react";
import ProductList from "./ProductsList"
import {Link} from 'react-router-dom'
import Header from "./Header";

const Home = (props) =>{

    return (
        <>  
        
            <Header/>
            <div className="container">
                <ProductList/>
            </div>
            <Link style={{padding:15}} to="/checkout">Checkout</Link>
        </>
        
    )
}

export default Home;