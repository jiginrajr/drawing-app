import React, { useMemo } from "react";

const Lines = ({ linePoints = [] }) => {

  const restructuredPoints = useMemo(() => {
    //check if the shape is enclosed
    const updatedPointStructure = [];
    if(linePoints?.length < 2){
        return [];
    }
    const encloseTheShape =
      linePoints[0][0] === linePoints[linePoints.length - 1][0] &&
      linePoints[0][1] === linePoints[linePoints.length - 1][1];

    for (let i = 0; i < linePoints.length - 1; i++) {
      if (encloseTheShape && i === linePoints.length - 1) {
        updatedPointStructure.push([...linePoints[i], ...linePoints[0]]);
        break;
      }
      updatedPointStructure.push([...linePoints[i], ...linePoints[i + 1]]);
    };
    return updatedPointStructure;
  },[linePoints]);


  return restructuredPoints.map((point,idx) => {
  return (
      <line
        key={idx}
        x1={point[0]}
        y1={point[1]}
        x2={point[2]}
        y2={point[3]}
        strokeWidth="1"
        stroke="black"
      />
  );
  });
};

export default Lines;
