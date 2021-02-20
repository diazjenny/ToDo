import "./App.css";
import { Public } from "./screens/Public"
import { Private } from "./screens/Private"


const App = () => {
  const isAuthenticated = false;
  return isAuthenticated ? <Private /> : < Public />;
};

export default App;
