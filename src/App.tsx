import { Router, Route } from "@solidjs/router";
import Home from "./pages/Home";
import Tae from "./pages/Tae";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/tae" component={Tae} />
    </Router>
  );
}

export default App;
