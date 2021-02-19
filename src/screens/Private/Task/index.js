import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddTask, Tasks, List } from "./screens"


const Task = () => {
    return (
        <Router>
            <Switch>
                <Route path="/tasks/add" component={AddTask} />
                <Route path="/tasks" component={Tasks} />
                <Route path="/" component={List} />
            </Switch>
        </Router>
    )
}

export default Task