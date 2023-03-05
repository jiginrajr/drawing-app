import React from 'react'

const IntersectionPoint = ({originPoint, setLinePoints, setIsDrawing}) => {

  const handleClickOnOriginPoint = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setLinePoints(prevPoints => {
      prevPoints.push(originPoint);
      return prevPoints
    });
    setIsDrawing(false);

  }

  return (
    <circle cx={originPoint[0]} cy={originPoint[1]} r="10" stroke="black" strokeWidth="3" fill="black" onClick={handleClickOnOriginPoint} />
  )
}

export default IntersectionPoint;