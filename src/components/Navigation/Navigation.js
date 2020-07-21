import React from "react";

const Navigation=({onRouteChange, isSignedIn})=>{
	
	if(isSignedIn){
		return(
			<nav style={{display:'flex',justifyContent:'flex-end'}}>
				<p onClick={() => onRouteChange('signout')} className='mr3 f5 ba br3 bw1 link dim washed-blue b--gold pa3 pointer'>Sign Out</p>
			</nav>
		);
				
		} else {
		return(
			<nav style={{display:'flex',justifyContent:'flex-end'}}>
				<p onClick={() => onRouteChange('signin')} className='mr3 f5 ba br3 bw1 link dim washed-blue b--gold pa3 pointer'>Sign In</p>
				<p onClick={() => onRouteChange('register')} className='mr3 f5 ba br3 bw1 link dim washed-blue b--gold pa3 pointer'>Register</p>
			</nav>	
		);
	    }
}

export default Navigation;