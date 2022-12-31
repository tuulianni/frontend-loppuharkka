import { useState, useEffect } from "react"
import AddCourses from "./addcourses";
import AddNotes from "./addnotes"
import Dropdown from "./dropdown";
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
		//const url = "https://luentomuistiinpano-api.deta.dev/courses";

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

		const id = courses.length +1;
		const r = {id: id, name: d}
		setCourses([...courses, r])
		
		console.log(courses)
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
			<button onClick={AddNote}>Lisää muistiinpano</button>
			<button onClick={ListNote}>Listaa muistiinpano</button>
			<button onClick={AddCourse}>Lisää kurssi</button>
				{na && (
						<div>
							<Dropdown courses= {courses} />
							<AddNotes notes = {notes} setNotes = {setNotes}/>
						</div>
					)}
				{nl && (
					<div>
						<ListNotes notes = {notes} deleteNote = {deleteNote}/>
					</div>
				)}
				{ca && (
					<div>
						<AddCourses addingCourses = {addingCourses} />
					</div>
				)}
		</div>
	)
}

export default Buttons