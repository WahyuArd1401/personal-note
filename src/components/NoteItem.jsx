import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import NoteItemContent from "./NoteItemContent";

function NoteItem( id ,title, createdAt, body, onDelete, onArchive){
  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={createdAt} body={body} />
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton id={id} onArchive={onArchive}/>
    </div>
  )
}

export default NoteItem