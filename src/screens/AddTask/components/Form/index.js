import React, {useState} from "react";
import "./form.scss"

import {api} from '../../../../utils'

const Form = () =>{

    const [task,setTask] = useState({})
    const [title,setTitle] = useState("")
    const [date,setDate] = useState("")
    const [description,setDescription] = useState("")
    const [assignated,setAssignated] = useState("")

    const submitForm = (e) => {
        e.preventDefault()
        setTask({title})
        console.log(task)
    }

    return (
        <form onSubmit =  {(e)=>submitForm(e)}>
            <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)} ></input>
            <input type="date" name="date"></input>
            <textarea name="description"></textarea>
            <select name="assignated">
                <option disabled>Assign to</option>
                <option value="Ailen">Ailen </option>
                <option value="Nico">Nico </option>
                <option value="Flor">Flor </option>
                <option value="Jenny">Jenny </option>
            </select> 
            <button type="submit">Add Task</button>
        </form>
    )
}

export { Form }