import React from "react"
import { getInitialData } from "../utils/index"
import NoteHeader from "./NoteHeader"
import NotesList from "./NoteItemList"

class NotesApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getInitialData()
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this)
    this.onArchiveHandler = this.onArchiveHandler.bind(this)
  }

  onDeleteHandler(id) {
    return
  }

  onArchiveHandler(id) {
    return
  }

  render() {
    return (
      <div className="note-app">
        <NoteHeader />
        <h2>Catatan Aktif</h2>
        <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
      </div>
    )
  }
}

export default NotesApp