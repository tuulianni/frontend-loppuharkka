const List = ( {course, text, date, deleteNote} ) => {

	return (
		<li>
			<div>
			<p 
				role="button" 
				tabIndex={0} 
				id="delete" 
				onKeyDown={() => deleteNote(text.text)}
				onClick={() => {
					console.log(text)
					deleteNote(text)}}
			>x</p>
			<div id="note-div">
				<p id="course">{course}</p>
				<p id="note">{text}</p>
				<p id="date">{date}</p>
			</div>
			
			</div>
		</li>
	)
}

export default List