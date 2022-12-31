import { useState } from "react";

const AddCourses = ( { addingCourses } ) => {
	
	const [text, setText] = useState('')

		const handleClick = (e) => {
			console.log("tallenna painettu", text);

			if (text == '') {
				return;
			}

			addingCourses(text);

		}

	return (
		<div>
			<br />
			<input 
				name="teksti" 
				id="teksti" 
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