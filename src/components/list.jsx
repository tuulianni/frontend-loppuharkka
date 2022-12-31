const List = ( {text, date, deleteNote} ) => {

	return (
		<li>
			<div>
			<p 
				role="button" 
				tabIndex={0} 
				id="delete" 
				onKeyDown={() => deleteNote(text.text)}
				onClick={() => deleteNote(text.text)}
			>(x)</p>

			<p>{text}</p>
			<p>{date}</p>
			
			</div>
		</li>
	)
}

export default List