import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddTask, Tasks , Ejemplo } from "./screens"


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/tasks/add" component={AddTask} />
        <Route path="/tasks" component={Tasks} /> 
        <Route path="/" component={Ejemplo} />
      </Switch>
    </Router>
  );
};

export default App;
