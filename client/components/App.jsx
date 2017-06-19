import React from 'react';
import io from 'socket.io-client'
require('../style/style.css');

const socket = io.connect('http://localhost:3000');

class App extends React.Component {

	componentDidMount() {
	}

	sendInfo(e) {
		e.preventDefault();
		let name = $('input[name="name"]').val();
		socket.emit('save', {
			model: 'User',
			data: {
				name: name
			}
		});
	}
	
	render() {
		return(
			<form>
				<h1>Hello from react!</h1>
				<input type="text" name="name" />
				<input type="button" value="Submit" onClick={this.sendInfo.bind(this)}  />
			</form>
		);
	}
}

export default App;