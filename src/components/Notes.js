import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Notes(props){
    let [notes, setNotes] = useState([{
        noteTitle: "No Note Added",
        noteBody: "Create Your Own Note"
    }])
    
    useEffect(() => {
        if (localStorage.getItem("notes") !== null) {
            setNotes(JSON.parse(localStorage.getItem("notes")))
        }
    }, [])
    
    let finalNotes = notes
    function deleteNote(e){
        const element = e.target
        if (element.className === "note") {
            element.remove()
            finalNotes = finalNotes.filter((el) => {
                return element.children[0].innerText !== el.noteTitle && element.children[0].innerText !== el.noteBody
            })
            localStorage.removeItem("notes")
            localStorage.setItem("notes", JSON.stringify(finalNotes))
            console.log(finalNotes);
        }else if(element.parentElement.className === "note"){
            element.parentElement.remove()
            finalNotes = finalNotes.filter((el) => {
                return element.parentElement.children[0].innerText !== el.noteTitle && element.parentElement.children[0].innerText !== el.noteBody
            })
            localStorage.removeItem("notes")
            localStorage.setItem("notes", JSON.stringify(finalNotes))
            console.log(finalNotes);
        }
        if(finalNotes.length === 0){
            localStorage.removeItem("notes")
        }
    }

    let data = props.searchValue

    let arrayOfNotes = () => {
        let newArray = []
        if(props.timeValue === "old notes"){
            newArray = [...notes].reverse()
            return newArray
        }else{
            return notes
        }
    }
    return (
        <div className="notes">
            {
                arrayOfNotes().map((note, i) => {
                    return( note.noteTitle.includes(data) && <div className="note" onClick={deleteNote} key={i} data-key={i}>
                        <h3>{note.noteTitle}</h3>
                        <p>{note.noteBody}</p>
                    </div>)
                })
            }
            <div className="last">
                <Link to="/create" className="anchor" onClick={props.changeHeaderClass}>Create New Note</Link>
            </div>
        </div>
    )
}
export default Notes;