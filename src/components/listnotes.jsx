import List from "./list"

const ListNotes = ( {notes, deleteNote}) => {
	
	return (
		<div id="results">
			<ul>
				{notes.map((p, i) => {
					return <List key={i} text={p.note} date={p.date}  deleteNote = {deleteNote}/>
				})}
			</ul>
		</div>
	)
}

export default ListNotes