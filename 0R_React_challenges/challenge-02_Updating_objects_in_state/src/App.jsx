import { useState } from "react";
import Background from "./Background.jsx";
import Box from "./Box.jsx";

const initialPosition = {
  x: 0,
  y: 0,
};

export default function Canvas() {
  const [shape, setShape] = useState({
    color: "orange",
    position: initialPosition,
  });

  function handleMove(dx, dy) {
    setShape({
      ...shape,
      position: {x: shape.position.x + dx, y: shape.position.y + dy}  // bug fixed
    });
  }
  // The problem was in the mutation inside handleMove. It mutated shape.position, 
  // but that’s the same object that initialPosition points at. 
  // This is why both the shape and the background move. (It’s a mutation, 
  // so the change doesn’t reflect on the screen until an unrelated update—the color change—triggers a re-render.)

  // The fix is to remove the mutation from handleMove, and use the spread syntax to copy the shape. 
  // Note that += is a mutation, so you need to rewrite it to use a regular + operation.

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value,
    });
  }

  return (
    <>
      <select value={shape.color} onChange={handleColorChange}>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag me!
      </Box>
    </>
  );
}