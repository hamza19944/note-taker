import { useState } from "react";
import { Link } from "react-router-dom";
function Create() {
    const [title, setTitle] = useState("")
    const [bodyText, setBodyText] = useState("")
    let notes = []

    function createNoteTitle (e){
        setTitle(e.target.value)
    }
    let createNoteBody = (e) => {
        setBodyText(e.target.value)
    }
    function createNote(){
        // let date = new Date()

        let note = {
            noteTitle: title,
            noteBody: bodyText,
            date : Date.now()
        }
        notes.push(note)
        if(JSON.parse(localStorage.getItem("notes")) === null){
            console.log("localStorage is empty");
            localStorage.setItem("notes",JSON.stringify(notes))
        }else{
            JSON.parse(localStorage.getItem("notes")).forEach(el => {
                notes.push(el)
            });
            localStorage.removeItem("notes")
            localStorage.setItem("notes",JSON.stringify(notes))
        }
    }
    return(
        <div className="create">
            <h2>Create New Note</h2>
            <div className="text">
                <input type="text" placeholder="Title" onChange={createNoteTitle}/>
                <textarea name="Text" id="" cols="30" rows="10" placeholder="Add Your Text" onChange={createNoteBody}></textarea>
            </div>
            <Link onClick={createNote} to="/" className="anchor">Create</Link>
        </div>
    )
}
export default Create;