import React, {useState,useEffect} from "react";
import {data} from"./pruductData"
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../redux/ProductSlice';

const Home = (props) =>{
    const products = useSelector((state) => state)
    const dispatch = useDispatch();

    const addProducts = (elm) =>{
        dispatch(addProduct({products:elm}))
    }

    return (
        <>
            {console.log("list page...",products)}
            {
                data.map((elm,ind)=>{
                    return (
                        <div className="list" key={ind}>
                            <p>Name:- {elm.name}</p>
                            <p>Price:- {elm.price}</p>
                            <p>Category:- {elm.category}</p>
                            <button onClick={()=>{addProducts(elm)}}>Add</button>
                            <button>Remove</button>
                            <Link to="/details">Details</Link>
                            <p>Added:-{0}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Home;