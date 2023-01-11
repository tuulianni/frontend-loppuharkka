import { useState } from "react"

const Dropdown = ( {courses, handleCourse}) => {

	const [name, setName] = useState('')

	const handleChange = (e) => {
		setName(e.target.value);
		console.log(e.target.value)

		let i = e.target.selectedIndex
		let y = e.target.value
		let x = e.target.options[i].text
		
		handleCourse(x, y)

	};

	return (
		<div id="dropdown">
			<label>
				<select value={name} onChange={handleChange}>
						<option>Valitse kurssi</option>
					{courses.map((option) => (
						<option key={option.id} value={option.id}>{option.name}</option>
					))}
				</select>
			</label>
		</div>
	)
}

export default Dropdown