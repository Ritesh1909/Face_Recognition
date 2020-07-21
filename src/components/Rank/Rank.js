import React from "react";

const Rank = ({name , entries}) => {
	if(name === ''){
		name = 'GUEST';
		entries = '**';
	}
	return(
		<div>
		<div className='white b f3'>
		{` ${name}, YOUR RANK AND ENTRY COUNT IS....`}
		</div>
			<div className='white times b f1'>
				{entries}
			</div>
		</div>
	);
}

export default Rank;