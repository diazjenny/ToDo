import React from 'react'
import { Layout, Main } from "../../../../components"
import { HeaderTasks } from '../../../../components/Layout/components/HeaderTasks'

const Update = () => {
    return (
        <Layout>
            <Main>
                <HeaderTasks />
                <h2>Update Task</h2>
            </Main>
        </Layout>
    )
}

export { Update }
