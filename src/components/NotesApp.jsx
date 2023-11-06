import React from "react"
import { getInitialData } from "../utils/index"
import NoteHeader from "./NoteHeader"
import NotesList from "./NoteItemList"
import NoteInput from "./NoteInput"
import autoBind from 'react-autobind'

class NotesApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getInitialData(),
    }

    autoBind(this)
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id)
    this.setState({notes})
  }

  onArchiveHandler(id) {
    return
  }

  onAddNoteHandler({ title, body}){
    this.setState((prevState)=>{
      return {
        notes : [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            createdAt: new Date(),
            body,
            archived: false
          }
        ]
      }
    })
  }

  render() {

    return (
      <div className="note-app">
        <NoteHeader />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler}/>
          <h2>Catatan Aktif</h2>
          <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
          <h2>Arsip</h2>
        </div>
      </div>
    )
  }
}

export default NotesApp