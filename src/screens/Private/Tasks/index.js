import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddTask } from './AddTask'
import { Update } from './Update'
import { List } from './List'


export const Tasks = () => {
    return (
        <Router>
            <Switch>
                <Route path="/tasks/add" component={AddTask} />
                <Route path="/tasks/update" component={Update} />
                <Route path="/tasks/" component={List} />
            </Switch>
        </Router>
    )
}