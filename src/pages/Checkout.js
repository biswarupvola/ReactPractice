import React, {useState,useEffect} from "react";
import Header from "./Header";
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { addProduct, removeProduct } from '../redux/ProductSlice';

const Checkout = (props) =>{
    const products = useSelector((state) => state.counter.products)
    const dispatch = useDispatch()


    return (
        <>
            {console.log("checkout page...",products)}
            <Header/>
            <div className="container">
            {
                products.map((elm,ind)=>{
                    return (
                        <div className="list" key={ind}>
                            <p>Name:- {elm.name}</p>
                            <p>Price:- {elm.price}</p>
                            <p>Category:- {elm.category}</p>
                            <button>Remove</button>
                            <Link to="/details">Details</Link>
                            <p>Added:-{0}</p>
                        </div>
                    )
                })
            }
            </div>
           
        </>
        
    )
}

export default Checkout;