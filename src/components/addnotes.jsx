import { useState } from "react";

const AddNotes = ( { notes, setNotes }) => {

	const [text, setText] = useState('')
	const [pvm, setPvm] = useState('') 

		const handleClick = () => {
			console.log("tallenna painettu", text);
			
			let d = JSON.stringify(new Date());
			setPvm(d)
			console.log("pvm: " + pvm + " | date: " + d)

			let new_note = { note: text, date: pvm }
			console.log(new_note)

			return setNotes([...notes, new_note])

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