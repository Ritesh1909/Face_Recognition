import React from "react";
import Tilt from 'react-tilt';
import './Logo.css';
import Face from './Face.png'

const Logo=()=>{
	return(
	<nav  className='ma4 nt0'>
		<Tilt className="Tilt center br2 shadow-2" options={{ max : 60 }} style={{ height: 125, width: 125 }} >
 			<div className="Tilt-inner pa3"> 
 			<img style={{paddingTop:'13px'}} alt='logo' src={Face}/> 
 			</div>
		</Tilt>	
	</nav>
	);
}

export default Logo;