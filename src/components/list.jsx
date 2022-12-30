const List = ( {text, date} ) => {
	return (
		<li>
			<div>
			<p 
				role="button" 
				tabIndex={0} 
				className="delete-button" 
				onKeyDown={() => console.log("key down")}
				onClick={() => console.log("click")}
			>poista</p>

			<p>{text}</p>
			<p>{date}</p>
			
			</div>
		</li>
	)
}

export default List