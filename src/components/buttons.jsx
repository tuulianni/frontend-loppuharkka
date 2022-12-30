import { useState } from "react"
import AddCourses from "./addcourses";
import AddNotes from "./addnotes"
import ListNotes from "./listnotes";

function Buttons() {

	const [na, setna] = useState(false); //addnote
	const [nl, setnl] = useState(false); //listnote
	const [ca, setca] = useState(false); //addcourse

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
							<AddNotes />
						</div>
					)}
				{nl && (
					<div>
						<ListNotes />
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