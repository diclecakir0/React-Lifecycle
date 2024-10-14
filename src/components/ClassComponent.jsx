import { Component } from "react";

class Sayac extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};

		console.log('constructor');
	}

	// The component runs when it first appears on the screen
	componentDidMount() {
		console.log('Component Did Mount');
	}

	// It runs whenever any state changes within the component
	componentDidUpdate() {
		console.log('Component Did Update');
	}

	// It runs when the component leaves the screen
	componentWillUnmount() {
		console.log('Component Will Unmount');
	}

	// The state updates when the button is clicked
	handleClick = () => {
		this.setState({count: this.state.count + 1});
	};

	render(){
		console.log('render çalıştı');
		return(
			<div>
				<p>
					clicked <span>{this.state.count}</span> times
				</p>
				<button onClick={this.handleClick}>Add</button>
			</div>
		)
	}


}