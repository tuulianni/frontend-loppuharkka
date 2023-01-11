import { useState } from "react";
import Dropdown from "./dropdown";

const AddNotes = ( { notes, setNotes, courses }) => {

	const [text, setText] = useState('')
	const [c, setC] = useState('')
	const [dd, setDD] = useState(true);
	const [quicknotes, setQuicknotes] = useState([])

		const handleClick = () => {
			if (text == '') {
				console.log("tyhjä")
				return;
			}

			console.log("tallenna painettu", text);

			setQuicknotes([...quicknotes, text]);
			console.log(quicknotes)
			
			// let d = JSON.stringify(new Date());
			let d = new Date().toLocaleString();
			let new_note = { id: 0, text: text, course: c, timestamp: d }
			console.log(new_note)
			setText('')

			return setNotes([...notes, new_note])

		}

		const handleCourse = (x, y) => {

			let new_course = {id: y, name: x}
			console.log(x)

			setC(new_course)
			setDD(false);
		}

		const handleText = (i) => {
			setText(i.target.value)
		}

		const ChangeCourse = () => {
			setQuicknotes([])
			setDD(true)
		}

	return (
	<div>
			{dd && (
				<div>
					<Dropdown courses = {courses} handleCourse = {handleCourse} />
				</div>
			)}	
			{!dd && (
				<div>
					Valittu kurssi: 
					<p id="valittu-kurssi">{c.name}</p>
					<button onClick={ChangeCourse}>Vaihda kurssia</button>
				</div>
			)}	
			<textarea 
				name="teksti" 
				id="teksti" 
				cols="50" 
				rows="10" 
				value={text}
				onChange={handleText}
				maxLength={200}
			></textarea>
			<br />
			<button onClick={handleClick}>Tallenna</button>
			<br />
			<ul id="quicknotes">
				<div>
				{quicknotes.map((p, i) => {
					return (
						<li key={i}>{p}</li>
					)})}
				</div>
			</ul>
		</div>
		

	)
	}

export default AddNotes