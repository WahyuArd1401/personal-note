function NoteSearch({ inputSearch, onSearch }){
  return (
    <div className="note-search">
      <input type="text" placeholder="Cari Judul Catatan" value={inputSearch} onChange={onSearch}/>
    </div>
  )
}

export default NoteSearch