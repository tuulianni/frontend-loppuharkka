import List from "./list"

const ListNotes = ( {notes, deleteNote}) => {
	
	return (
		<div id="results">
			<ul>
				{notes.map((p, i) => {
					return (
					<List 
						key={i} 
						course={p.course.name} 
						text={p.text} 
						date={p.timestamp} 
						deleteNote = {deleteNote}/>
				)})}
			</ul>
		</div>
	)
}

export default ListNotes