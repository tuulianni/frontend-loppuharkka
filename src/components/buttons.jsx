import { useState, useEffect } from "react"
import AddCourses from "./addcourses";
import AddNotes from "./addnotes"
import ListNotes from "./listnotes";

function Buttons() {

	//listat, joiden haluaisin olevan muualla
	const [courses, setCourses] = useState ([])
	const [notes, setNotes] = useState ([])

	//täytetään muistiinpanolista
	const getNotes = async () => {

		useEffect(() => {
      fetch('https://luentomuistiinpano-api.deta.dev/notes/')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setNotes(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
	}

	getNotes();

	//täytetään kurssilista
	const getCourses = async () => {

		useEffect(() => {
      fetch('https://luentomuistiinpano-api.deta.dev/courses')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setCourses(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

		// 
	}

	//lisätään kursseja
	const addingCourses = ( d ) => {

		const id = courses.length;
		const r = {id: id, name: d}
		setCourses([...courses, r])

		console.log(courses)
		console.log("Opintojakso " + d + " lisätty id:lle " + id)
	}

	getCourses();

	//poistetaan muistiinpanoja
	const deleteNote = (t) => {
		const r = notes.filter(text => text.text !== t)
		setNotes(r);
		console.log("poista klikattu " + r)
	}

	//nappien toimintahommat alkaa 
	const [na, setna] = useState(false); //addnote
	const [nl, setnl] = useState(false); //listnote
	const [ca, setca] = useState(false); //addcourse

	//piilottaa auki olevat avattavan tieltä
	const hideElse = (x, y) => {
		x(false);
		y(false);
	}

	//nappien toiminnallisuudet
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
			<div id="buttons">
				<button onClick={AddNote}>Lisää muistiinpano</button>
				<button onClick={ListNote}>Listaa muistiinpano</button>
				<button onClick={AddCourse}>Lisää kurssi</button>
			</div>
				{na && (
						<div>
							<AddNotes 
								notes = {notes} 
								setNotes = {setNotes}
								courses = {courses} />
						</div>
					)}
				{nl && (
					<div>
						<ListNotes notes = {notes} deleteNote = {deleteNote}/>
					</div>
				)}
				{ca && (
					<div>
						<AddCourses addingCourses = {addingCourses} courses = {courses} />
					</div>
				)}
		</div>
	)
}

export default Buttons