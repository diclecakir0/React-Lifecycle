import { useState, useEffect } from "react";

const Paper = () => {
		const [todo, setTodo] = useState({});
		const [page, setPage] = useState(1);
	  
	
	useEffect(()=>{
			console.log("Add Component");
			return ()=>{
				console.log("Delete Component");
			};
		}, []

	)

	return(
		<div>
			<h1>Function Component</h1>
			<h1>{todo.title}</h1>
			<p>Id:{todo.id}</p>
			<p>Page:{page}</p>
			<button onClick={()=> setPage(page+1)}>Change</button>
		</div>
	)
}

export default Paper;


/*
useEffect: Used instead of componentDidMount | componentDidUpdate | componentWillUnmount methods

1- useEffect(()=>{},[])
2- useEffect(()=>{})
3- useEffect(()=>{},[page])
4- useEffect(()=>{ return () => {}  },[])


!1-  The component runs when it first appears on the screen
  a- Function that runs when the component appears on the screen
  b- Array
? useEffect(()=>{},[])

!2- The component runs whenever it updates (state or prop changes)
  a- Function
? useEffect(()=>{})

!3- It runs when a specific state within the component changes
  a- Function
  b- State
? useEffect(()=>{},[page])

!4- It runs when the component leaves the screen
  a- Function
  b- Array
  c- A return statement and a new function are added within the function

 useEffect(()=>{ 
    console.log("Add Component")
    return () => {
        console.log("Delete Componenet")
    }  
},[])


*/