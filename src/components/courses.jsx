import { useState } from "react"

function Courses(x, y) {

	const [courses, setCourses] = useState ([
		{
			id: 0,
			name: "matikka"
		},
		{
			id: 1,
			name: "äikkä"
		}
	])

	if (x === "add") {
		addingCourse(y);
	}

	const addingCourse = (y) => {
		
		const [id, setId] = useState('')
		const [name, setName] = useState('')

		setName = y;
		z = courses.length + 1;
		setId = z;

		let new_course = {id: id, name: name}
		console.log(new_course)
		setCourses([...courses, new_course])
	}
	
	
	const printingCourse = () => {
		{courses.map((r, i) => {
			return <List key={i} name={r.name} />;
		})}
	}

}


export default Courses;