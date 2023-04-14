import React, { Component } from 'react';

class Content extends Component{
	render() {
	console.log('Content Component');
		return(
		    <section style={{background : "lightpink", border:"3px solid black"}}>
		        <h2>Contents</h2>
		    </section>
		);
	}
}

export default Content;
