import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddTask, Tasks, Ejemplo } from "./screens"


const Private = () => {
    return (
        <Router>
            <Switch>
                <Route path="/tasks" component={Task} />
                <Route path="/user" component={User} />
                {/* <Route path="/" component={List} /> */}
            </Switch>
        </Router>
    );
};

export { Private }