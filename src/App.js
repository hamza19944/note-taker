import { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Create from "./components/Create";
import Header from "./components/Header";
import Home from "./components/Home"

function App() {  
  function changeHeader (e) {
    e.target.addEventListener("click", () => {
      let allA = document.querySelectorAll("header ul a")
      console.log(allA);
      allA.forEach(a=> {
        a.classList.remove("active")
        allA[1].classList.add("active")
      })
    })
  }
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home changeHeaderClass = {changeHeader}/>}/>
          <Route exact path="/create" element={<Create />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;