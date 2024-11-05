import { Router, Route } from "@solidjs/router";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      {/* <Route path="/about" component={About} /> */}
    </Router>
  );
}

export default App;
