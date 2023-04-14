import React, { Component } from 'react';

class Footer extends Component{
	render() {
	console.log('Footer Component');
		return(
		    <footer style={{background : "lightgray", border:"3px solid black"}}>
		        <h2>Footer</h2>
		    </footer>
		);
	}
}

export default Footer;