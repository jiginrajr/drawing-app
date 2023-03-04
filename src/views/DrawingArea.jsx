import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import Lines from "./Lines";
// import Lines from './Lines';

const DrawingArea = () => {
  const [linePoints, setLinePoints] = useState([]);
  const [ isDrawing, setIsDrawing] = useState(false);

  const handlePositionClick = (e) => {
    if(!isDrawing) return;
    const container = document.getElementById("drawing-area").getBoundingClientRect();
    
    console.log(`container`,container);
    console.log(`clicked position ${e.clientX} ${e.clientY}`);
    console.log(`clickedPosition ${e.clientX - container.left } ${e.clientY - container.top }`);
    setLinePoints( [ ...linePoints, [e.clientX - container.left, e.clientY - container.top]]);
  };

  return (
    <>
    <Box mb={1}>
    <Stack direction="row" spacing={2}>
    <Button variant="outlined" onClick={() => setIsDrawing(prevVal => !prevVal)}>{isDrawing ?  "Stop drawing" : "Start Drawing"}</Button>
    <Button color="error" variant="outlined" onClick={() => setLinePoints([])}>Clear</Button>
    </Stack>
    </Box>
    <Box
    id="drawing-area"
      sx={{ width: 500, height: 500, backgroundColor: "#f2dedc" }}
      onClick={handlePositionClick}
    >
      <svg width={"500px"} height={"500px"}>
        <Lines linePoints={linePoints}/>
      </svg>
    </Box>
    </>
  );
};

export default DrawingArea;
