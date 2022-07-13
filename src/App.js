import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Create from "./components/Create";
import Header from "./components/Header";
import Home from "./components/Home"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/create" element={<Create />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;