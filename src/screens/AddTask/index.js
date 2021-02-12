import React from "react";
import {Layout, Main} from "../../components"
import {Form} from "./components"

const AddTask = () => {

    return (
        <Layout>
            <Main>
            <h2>Add Task</h2>
            <Form />
            </Main>
        </Layout>
    )
}

export { AddTask }