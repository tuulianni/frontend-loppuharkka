import { useState } from "react";
import Courses from "./courses";

const AddCourses = () => {
	
	const [text, setText] = useState('')

		const handleClick = (e) => {
			console.log("tallenna painettu", text);

			if (text == '') {
				return;
			}

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