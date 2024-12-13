import React from "react";

export const Card = ({ product }) => {//Card recibe product que se lo pasan cuando usan al componente en el componente Products
    //console.log(product);
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: {product.price}€</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}