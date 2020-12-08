import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm =({ onInputChange , onButtonSubmit })=>{
	return(
	<div>
	<p className='f3 b yellow'>
		{'THIS SITE WILL DETECT FACES IN YOUR PICTURES.'}
	</p>
	<p className='f3 b yellow'>
		{'GIVE IT SOME SECONDS TO ANALYZE'}
	</p>
	
	<div className='center'>
		<div className='form center pa4 br3 shadow-5'>
			<input className='f4 pa2 w-70 center' type='text' placeholder='Enter Image URL' onChange={onInputChange}/>
			<button 
			className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
			onClick={onButtonSubmit}
			>
			{'DETECT'}
			</button>
		</div>
	</div>
	</div>
	);
}

export default ImageLinkForm;
