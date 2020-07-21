import React from "react";
import FaceBoxes from '../FaceBoxes/FaceBoxes';

const FaceRecognition =({ imageUrl , boxes})=>{
	return(
		<div className="center ma">
      	<div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} width="500px" heigh="auto" />
        <FaceBoxes boxes={boxes} />
        </div>
		</div>
	);
}

export default FaceRecognition;