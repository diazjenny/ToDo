import React from "react";
import { Link } from "react-router-dom";

const HeaderTasks = () => {

    return (
        <header>
            <h2>ToDo List</h2>
            {/* <button>Agregar</button> */}
            <Link to="/tasks/add">Agregar</Link>
        </header>
    )

}

export { HeaderTasks };