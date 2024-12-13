import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Products } from "./Products";

//create your first component
const Home = () => {
	const [nombre, setNombre] = useState("Pepito")
	//.  variable, funcion modificadora = como inicia la variable
	console.log(nombre);
	return (
		<div className="text-center">
			<input type="text" onChange={(e) => setNombre(e.target.value)} />
			<h1 id="saludo" className="text-center mt-5">Hello {nombre}!</h1>
			<Products />
		</div>
	);
};

export default Home;
