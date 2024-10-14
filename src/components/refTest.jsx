import { useRef } from "react";

const Search = () => {
	const inputRef = useRef();
	const input2Ref = useRef();

	const handleClick = () => {
		inputRef.current.focus();

		inputRef.current.style.background = 'red'; 

		input2Ref.current.style.background ='green';
	} 
	return(
		<div>
			<input type="text" ref={inputRef} />
			<input type="text"  ref={input2Ref}/>
			<button onClick={handleClick}>Focus</button>

		</div>
	);
};

export default Search; 

// useRef() takes references to JSX elements

// useRef() Usage
// import useRef
// Assign the ref attribute to the element we want to reference
// Assigning a value inside ref={}
