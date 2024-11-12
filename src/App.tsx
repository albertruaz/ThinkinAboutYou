import { Router, Route } from "@solidjs/router";
import Home from "./pages/Home";
import Tae from "./pages/Tae";
import Bluescreen from "./pages/Bluescreen";
import RetroUI from "./pages/RetroUI";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/tae" component={Tae} />
      <Route path="/bluescreen" component={Bluescreen} />
      <Route path="/retro-ui" component={RetroUI} />
    </Router>
  );
}

export default App;
