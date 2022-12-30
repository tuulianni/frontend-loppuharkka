import { useState } from "react";

const AddNotes = ( { notes, setNotes }) => {

	const [text, setText] = useState('')

		const handleClick = () => {
			console.log("tallenna painettu", text);
			
			const date = new Date();

			let new_note = { note: text, date: date }
			console.log(new_note)
			setNotes([...notes, new_note])
			setNotes('')

			return notes;

		}

		const handleText = (i) => {
			setText(i.target.value)
		}

	return (
		<div>
			<textarea 
				name="teksti" 
				id="teksti" 
				cols="50" 
				rows="20" 
				value={text}
				onChange={handleText}
				maxLength={200}
			></textarea>
			<br />
			<button onClick={handleClick}>Tallenna</button>
		</div>
	)
	}

export default AddNotes