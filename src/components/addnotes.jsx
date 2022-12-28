import { useState } from "react";

const AddNotes = () => {

	const [text, setText] = useState('')

		const handleClick = (e) => {
			console.log("tallenna painettu", text);
		}

	return (
		<div>
			<br />
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