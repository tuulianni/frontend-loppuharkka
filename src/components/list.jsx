const List = ( { data } ) => {
	return (
		<div className="row"> 
			<p 
				role="button" 
				tabIndex={0} 
				className="delete-button" 
				onKeyDown={() => console.log("key down")}
				onClick={() => console.log("click")}
			>[x]</p>

			
		</div>
	)
}

export default List