import React, { useState } from "react";
import { Card } from "./Card";

export const Products = () => {

    const [productos, setProductos] = useState([
        {
            name: "Arbolito",
            price: "200",
            id: 1
        },
        {
            name: "Luces",
            price: "20",
            id: 2
        },
        {
            name: "Carrito",
            price: "200",
            id: 3
        },
        {
            name: "Guitarra",
            price: "200",
            id: 4
        },
    ])

    const computador = {
        name: "Macbook Super Ultra Pro",
        price: "10 Riñones y 3 Hijos",
        id: 700
    }
    const handleClick = () => {
        setProductos([...productos, computador])
    }

    return (
        <>{/* esto es conocido como Fragments <></> */}
            <h2>Products</h2>
            <div>
                {
                    productos.map((articulo) => {
                        return (
                            //devolvemos a nuestro html el componente Card por cada articulo en nuestro arreglo de productos
                            <Card product={articulo} key={articulo.id} /> //le pasamos al componente Card *product* que contiene al articulo
                        )
                    })
                }
            </div>
            <button onClick={handleClick}>Agregar el item mas caro</button>
        </>
    )
}