import React from 'react'
import { HeaderTasks } from "../../../../components/Layout/components/HeaderTasks"
import { Layout, Main } from "../../../../components"

const List = () => {
    return (
        <Layout>
            <Main>
                <HeaderTasks />
                <h2>Task List</h2>
            </Main>
        </Layout>
    )
}

export { List }
