import { useState } from "react"

const Courses = () => {

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

	const addingCourse = (y) => {
		
		const [id, setId] = useState('')
		const [name, setName] = useState('')

		setName = y;
		setId = courses.length+1;

		let new_course = {id: id, name: name}
		console.log(new_course)
		setCourses([...courses, new_course])
		setName('')
		setId('')
	}
	
	
	const printingCourse = () => {
		{courses.map((r, i) => {
			return <List key={i} name={r.name} />;
		})}
	}

}


export default Courses;