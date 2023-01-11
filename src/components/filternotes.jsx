import { useState } from "react"
import Dropdown from "./dropdown"
import List from "./list"

const FilterNotes = ( { notes, courses, deleteNote } ) => {

	const [filter, setFilter] = useState('')

	const handleCourse = (x, y) => {

		//filter with name
		setFilter(x)

	}

	return (
		<div>

			<Dropdown courses={courses} handleCourse={handleCourse}/>

			<p>Haetaan tulokset hakusanalla: {filter}</p>
			<div id="results">
					<ul>
						{notes.map((p, i) => {
							if (p.course.name == filter) {
							return (
							<List 
								key={i} 
								id={p.course.id}
								course={p.course.name} 
								text={p.text} 
								date={p.timestamp} 
								deleteNote = {deleteNote}/>
						)}
						})}
					</ul>
			</div>

		</div>
	)
}

export default FilterNotes