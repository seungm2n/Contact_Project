import React, { Component } from 'react';

class Header extends Component{
	render() {
	console.log('Header Component');
		return(
		    <header style={{background : "lightblue", border:"3px solid black"}}>
		        <div>LOGO IMG</div>
		        <nav>
		            <li>메뉴1</li>
		            <li>메뉴2</li>
		            <li>메뉴3</li>
		        </nav>
		    </header>
		);
	}
}

export default Header;