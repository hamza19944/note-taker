import { useState } from "react"
import Notes from "./Notes"

function Home() {
    const [words, setWords] = useState("")
    const [searchValue, setSearchValue] = useState("")
    let x = []
    function inputValue(e) {
        setWords(e.target.value);
    }
    let dataFromChild = (items) => {
        setSearchValue(items)
    }
    function filterAll(){
        let notes = searchValue
        notes = notes.filter(i => {
            return i.noteTitle === words
        })
        console.log(notes);
    }
    return(
        <main>
            <div className="search">
                <input type="text" className="input" placeholder="Note..."/>
                <input className="btn" type="button" value="Search" onClick={filterAll}/>
                <select>
                    <option name="recent">recent</option>
                    <option name="old-notes">old notes</option>
                </select>
            </div>
            <Notes searchItems={dataFromChild}/>
        </main>
    )
}
export default Home