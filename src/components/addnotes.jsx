import { useState } from "react";
import Time from "./time";

const AddNotes = () => {

	const [text, setText] = useState('')

	let data = {text, Time}
	console.log(data)

		const handleClick = (e) => {
			console.log("tallenna painettu", text, Time);
			//addText();
		}

	return (
		<div>
			<textarea 
				name="teksti" 
				id="teksti" 
				cols="50" 
				rows="20" 
				value={text}
				onChange={(e) => setText(e.target.value)}
				maxLength={200}
			></textarea>
			<br />
			<button onClick={handleClick}>Tallenna</button>
		</div>
	)
	}

export default AddNotes