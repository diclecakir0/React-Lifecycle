const ListElement = ({user}) => {

	const {name, phone, email, address } = user;
	return( 
		<li className="userli">
		{name}
		<br />
		{phone}
		<br />
		{address?.zipcode}
	</li>
	);
};

export default ListElement;