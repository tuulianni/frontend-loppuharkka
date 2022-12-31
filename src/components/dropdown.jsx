import { useState } from "react"

const Dropdown = ( {courses}) => {

	const [name, setName] = useState('')

	const handleChange = (e) => {
		setName(e.target.name);

	};

	return (
		<div id="dropdown">
			<label>
				<select value={name} onChange={handleChange}>

					{courses.map((option, i) => (
						<option key={i} value={option.name}>{option.name}</option>
					))}
				</select>
			</label>
		</div>
	)
}

export default Dropdown