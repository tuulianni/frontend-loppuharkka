import { useState } from "react"
import Courses from "./courses";

const Dropdown = () => {

	const [name, setName] = useState()

	const handleChange = (e) => {
		setName(e.target.name);

	};

	return (
		<div>
			<label>
				<select value={name} onChange={handleChange}>

					{courses.map((option) => (
						<option value={option.name}>{option.name}</option>
					))}
				</select>
			</label>
		</div>
	)
}

export default Dropdown