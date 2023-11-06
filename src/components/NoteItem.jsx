import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import NoteItemContent from "./NoteItemContent";
import { showFormattedDate } from "../utils/index";

function NoteItem({ id, title, createdAt, body, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={showFormattedDate(createdAt)} body={body} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive} />
      </div>
    </div>
  )
}

export default NoteItem