import React from "react";
import {Link} from "react-router-dom";

const Header = () =>{

    return (
    <header>
        <h2>ToDo List</h2>
        {/* <button>Agregar</button> */}
        <Link to="/tasks/add">Agregar</Link>
    </header>
    )
    
}

export { Header };