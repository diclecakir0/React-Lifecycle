import { useEffect, useState, useRef } from "react";
import ListElement from "./ListElement";

const FilterUser = () => {
	const [cloneUsers, setCloneUsers ] = useState(null);
	const [users, setUsers] = useState(null);
	

	const inputRef = useRef();

	//The function runs when the component appears on the screen
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then((res) => res.json())
		.then((data) => {
			setUsers(data);
			setCloneUsers(data);
		})
		.catch((err)=> alert("Daha sonra tekrar deneyin"));
	}, []);

	//It runs when the search button is clicked
	const handleSearch = () => {
			const query = inputRef.current.value.toLowerCase();

			const filtredUser = cloneUsers.filter((user) => user.name.toLowerCase().includes(query));

			setUsers(filtredUser);
	};
	


	return(
		<div>
			<h1>Users</h1>
			<input type="text" ref={inputRef}/>
			<button onClick={handleSearch}>Search</button>
			<ul>
				{users === null && <p>Loading...</p>}
				
				{users && users.map((user) => <ListElement user={user}/> )}	
			</ul>
		</div>
	);
};

export default FilterUser;