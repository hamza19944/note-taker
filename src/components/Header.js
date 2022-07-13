import { useState } from "react";
import { Link } from "react-router-dom";

function Header(){
    let [isActive, setIsActive] = useState(true)

    function toggleActiveClass(e){
        setIsActive(!isActive)
    }
    return (
        <header>
            <h1>Note Taker</h1>
            <ul>
                <Link className={isActive ? "active" : null} onClick={toggleActiveClass} to="/">Home</Link>
                <Link className={isActive ? null : "active"} onClick={toggleActiveClass} to="/create">New Note</Link>
            </ul>
        </header>
    )
}
export default Header;