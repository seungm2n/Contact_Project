import React, { Component } from 'react';
//import Contact from './components/Contact';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import App from '../App';


class Header extends Component{
	render() {
	console.log('Header Component');
		return(
		    <div style={{background : "lightblue", border:"3px solid black"}}>
		        <div>LOGO IMG</div>
		        <nav>
		        <li><Link to="./" className="links">홈</Link></li>
				<li><Link to="./contact" className="links"> 연락처 </Link></li>
				</nav>
				<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />}>연락처</Route>
					<Route path="/contact" element={<Contact />}>연락처</Route>
				</Routes>
			</BrowserRouter>
		    </div>
		    
		);
	}
}


export default Header;