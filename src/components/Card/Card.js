import React,{useEffect} from 'react'
import "./Card.css"

/* id: 0
imgURL: "https://m.media-amazon.com/images/I/51uguxa9nYL._AC._SR360,460.jpg"
inStock: true
price: "₺134,77"
title: " */


function Card({product}) {

    const timer=setTimeout(()=>{
        console.log("timer calisti")
    },5000)
    
    useEffect(() => {
        console.log("effect")
        return () => {
            clearTimeout(timer)
        }
    }, [])
    return (
        <div className="card">
            <img  src={product.imgURL} className="img" alt={product.title}/>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p style={{color:product.inStock ?"green" :"red"}}>{product.inStock ? "available" :"unavailable"}</p>
        </div>
    )
}

export default Card
