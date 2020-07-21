import React from 'react'
import './FaceBoxes.css'

const FaceBoxes = ({ boxes }) => {

  if (JSON.stringify(boxes) !== '{}') {
    return boxes.map((box) => (
      <div
        className="bounding-box"
        key={box.topRow}
        style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}
      ></div>
    ))
  } else return null
}

export default FaceBoxes