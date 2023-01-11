import { useState } from "react";

const AddCourses = ( { addingCourses, courses } ) => {
	
	const [text, setText] = useState('')
	const [temp, setTemp] = useState(false)
	const [x, setX] = useState('')

		const handleClick = (e) => {
			if (text == '') {
				console.log("tyhjä")
				return;
			}
			console.log("tallenna painettu", text);

			setTemp(current => !current);

			setX(text)
			console.log(x)

			addingCourses(text);
			setText('')

			console.log(x)
		}

	return (
		<div>
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

			{temp && (
					<div>
						<p>Opintojakso {x} lisätty id:lle {courses.length}</p>
					</div>
				)}
		</div>
	)
	}

export default AddCourses