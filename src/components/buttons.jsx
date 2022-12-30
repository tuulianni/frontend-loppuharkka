import { useState } from "react"
import AddCourses from "./addcourses";
import AddNotes from "./addnotes"
import Dropdown from "./dropdown";
import ListNotes from "./listnotes";

function Buttons() {

	const [na, setna] = useState(false); //addnote
	const [nl, setnl] = useState(false); //listnote
	const [ca, setca] = useState(false); //addcourse

	const [courses, setCourses] = useState ([
		{ id: 0, name: "matikka" },
		{ id: 1, name: "äikkä" }
	])
	const [notes, setNotes] = useState ([
		{ text: "tämä on testi", date: "1.1.2023 00:00" }
	])

	//piilottaa auki olevat avattavan tieltä
	const hideElse = (x, y) => {
		x(false);
		y(false);
	}

	const AddNote = () => {
		console.log("AddNote clicked")
		setna(current => !current);

		hideElse(setnl, setca);
	}

	const ListNote = () => {
		console.log("ListNotes clicked")
		setnl(current => !current);

		hideElse(setna, setca);
	}

	const AddCourse = () => {
		console.log("AddCourse")
		setca(current => !current);

		hideElse(setnl, setna);
	}

	return (
		<div>
			<button onClick={AddNote}>Lisää muistiinpano</button>
			<button onClick={ListNote}>Listaa muistiinpano</button>
			<button onClick={AddCourse}>Lisää kurssi</button>
				{na && (
						<div>
							<Dropdown courses= {courses} />
							<AddNotes />
						</div>
					)}
				{nl && (
					<div>
						<ListNotes notes = {notes} />
					</div>
				)}
				{ca && (
					<div>
						<AddCourses />
					</div>
				)}
		</div>
	)
}

export default Buttons