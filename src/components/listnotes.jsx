import List from "./list"

const ListNotes = ( {notes, deleteNote}) => {

	if (notes.length === 0) {
		return <div>Ei muistiinpanoja</div>;
	}

	return (
		<div id="results">
			<ul>
				{notes.map((p, i) => {
					return (
					<List 
						key={i} 
						id={p.course.id}
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