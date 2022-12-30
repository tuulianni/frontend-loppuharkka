const List = ( {text, date} ) => {

	const handleClick = () => {
		console.log("poista klikattu")

		
	}
	return (
		<li>
			<div>
			<p 
				role="button" 
				tabIndex={0} 
				id="delete" 
				onClick={{handleClick}}
			>(x)</p>

			<p>{text}</p>
			<p>{date}</p>
			
			</div>
		</li>
	)
}

export default List