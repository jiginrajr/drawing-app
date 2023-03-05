import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { debounce } from "lodash"
import Lines from "./Lines";
import IntersectionPoint from "./IntersectionPoint";
// import Lines from './Lines';

const DrawingArea = () => {
  const [linePoints, setLinePoints] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const handlePositionClick = (e) => {
    console.log("inside handlePositionClick")
    if (!isDrawing) return;
    const container = document
      .getElementById("drawing-area")
      .getBoundingClientRect();

    setLinePoints((prevLinePoints) => {
      if(prevLinePoints?.length>0){
        prevLinePoints[prevLinePoints.length - 1] = [e.clientX - container.left, e.clientY - container.top];
        prevLinePoints.push([e.clientX - container.left, e.clientY - container.top]);
        return prevLinePoints;
      }
      return [[e.clientX - container.left, e.clientY - container.top], [e.clientX - container.left, e.clientY - container.top]];
    });
      
  };

  const handleMouseOver = (e) => {
    const container = document
      .getElementById("drawing-area")
      .getBoundingClientRect();

    const updatedLinePoints = [...linePoints];
    if (linePoints.length > 0) {
      updatedLinePoints[updatedLinePoints.length - 1] = [
        e.clientX - container.left,
        e.clientY - container.top,
      ];

    } 

    setLinePoints(updatedLinePoints);
  };

  // console.log("linePoints", linePoints);

  return (
    <>
      <Box mb={1}>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            onClick={() => { setIsDrawing((prevVal) => !prevVal);
              setLinePoints([]);
            }}
          >
            {isDrawing ? "Stop drawing" : "Start Drawing"}
          </Button>
          <Button
            color="error"
            variant="outlined"
            onClick={() => setLinePoints([])}
          >
            Clear
          </Button>
        </Stack>
      </Box>
      <Box
        id="drawing-area"
        sx={{ width: 500, height: 500, backgroundColor: "#f2dedc" }}
        onClick={handlePositionClick}
      >
        <svg
          width={"500px"}
          height={"500px"}
          onMouseMove={linePoints.length > 0 && isDrawing ? handleMouseOver : null}
        >
          <Lines linePoints={linePoints} />
          {isDrawing && linePoints?.length > 0 && (
            <IntersectionPoint
              originPoint={linePoints[0]}
              setLinePoints={setLinePoints}
              setIsDrawing={setIsDrawing}
            />
          )}
          Sorry, your browser does not support inline SVG.
        </svg>
      </Box>
    </>
  );
};

export default DrawingArea;
