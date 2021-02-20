import React, { useState } from "react";
import "./form.scss"
import { apiTask } from '../../api.js'


const Form = () => {

    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [assigned, setAssigned] = useState("")

    const submitForm = (e) => {
        e.preventDefault()
        apiTask.post({
            title: title,
            date: date,
            description: description,
            assigned: assigned
        })
    }

    return (
        <form onSubmit={submitForm}>
            <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} ></input>
            <input type="date" name="date" onChange={(e) => setDate(e.target.value)}></input>
            <textarea name="description" onChange={(e) => setDescription(e.target.value)}></textarea>
            <select name="assigned" defaultValue="assigned to" onChange={(e) => setAssigned(e.target.value)}>
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