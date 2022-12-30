import List from "./list"

const ListNotes = ( {notes} ) => {
	
	return (
		<div id="results">
			<ul>
				{notes.map((p, i) => {
					return <List key={i} text={p.text} date={p.date} />
				})}
			</ul>
		</div>
	)
}

export default ListNotes