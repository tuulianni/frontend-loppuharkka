import { useState } from "react";

const AddCourses = ( { addingCourses } ) => {
	
	const [text, setText] = useState('')

		const handleClick = (e) => {
			if (text == '') {
				console.log("tyhjä")
				return;
			}
			console.log("tallenna painettu", text);

			addingCourses(text);
			setText('')
		}

	return (
		<div>
			<br />
			<input 
				name="teksti" 
				id="inputti" 
				cols="30" 
				rows="5" 
				value={text}
				onChange={(e) => setText(e.target.value)}
				maxLength={200}
			></input>
			<br />
			<button onClick={handleClick}>Tallenna</button>
		</div>
	)
	}

export default AddCourses