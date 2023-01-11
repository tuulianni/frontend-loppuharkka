import List from "./list"
import { useState } from "react";
import FilterNotes from "./filternotes";

const ListNotes = ( {notes, courses, deleteNote}) => {

	const [listAll, setListAll] = useState(true)

	if (notes.length === 0) {
		return <div>Ei muistiinpanoja</div>;
	}

	const SearchNotes = () => {
		setListAll(false);
		console.log("clicked")
	}

	const ListAll = () => {
		setListAll(true);
	}

	return (
		<div>
			<button onClick={SearchNotes}>Etsi tietyt muistiinpanot</button>
			<button onClick={ListAll}>Listaa kaikki</button>

			{listAll && (
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
				</div>)}

			{!listAll && (
				<div>
					<FilterNotes notes = {notes} courses = {courses} deleteNote={deleteNote}/>
				</div>
			)}
		</div>
	)
}

export default ListNotes