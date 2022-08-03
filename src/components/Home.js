import { useState } from "react"
import Notes from "./Notes"

function Home(props) {
    const [words, setWords] = useState("")
    const [selectValue, setSelectValue] = useState("")

    function sV(e) {
        setSelectValue(e.target.value);
    }
    return(
        <main>
            <div className="search">
                <div className="search-input">
                    <input type="text" className="input" placeholder="Note..." onChange={(e)=>{setWords(e.target.value)}}/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <select onChange={sV}>
                    <option name="filter..." value="">filter...</option>
                    <option name="recent">recent</option>
                    <option name="old-notes">old notes</option>
                </select>
            </div>
            <Notes searchValue = {words} timeValue = {selectValue} changeHeaderClass = {props.changeHeaderClass}/>
        </main>
    )
}
export default Home