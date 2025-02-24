import React, { useState, useRef } from 'react';
import './App.css';

const DragandDrop = () => {
  // State to hold the list of items that will be displayed and reordered
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8']);
  
  // Refs to track the index of the item being dragged and the item being hovered over
  const dragItem = useRef();
  const dragOverItem = useRef();

  // This function is called when a drag operation starts
  const handleDragStart = (e, index) => {
    // Save the index of the item being dragged
    dragItem.current = index;
  };

  // This function is called when an item is hovered over during the drag operation
  const handleDragEnter = (e, index) => {
    // Update the index of the item being hovered over
    dragOverItem.current = index;
  };

  // This function is called when the drag operation ends
  const handleDragEnd = () => {
    // Create a copy of the current items array to make changes without mutating the original
    const itemsCopy = [...items];
    
    // Get the content of the dragged item
    const draggedItemContent = itemsCopy[dragItem.current];
    
    // Remove the dragged item from its original position
    itemsCopy.splice(dragItem.current, 1);
    
    // Insert the dragged item into the new position (the hovered item position)
    itemsCopy.splice(dragOverItem.current, 0, draggedItemContent);
    
    // Update the state with the new order of items
    setItems(itemsCopy);
    
    // Reset the refs after the drag is complete
    dragItem.current = null;
    dragOverItem.current = null;
  };

  return (
    <div className="drag-and-drop">
      {/* Loop over the items and display them as draggable elements */}
      {items.map((item, index) => (
        <div
          key={index}
          draggable // This makes the item draggable
          onDragStart={(e) => handleDragStart(e, index)} // Set the start of the drag operation
          onDragEnter={(e) => handleDragEnter(e, index)} // Set the target item being hovered over
          onDragEnd={handleDragEnd} // Handle the end of the drag and update the list
          className="drag-item" // Apply custom styles to the draggable item
        >
          {item} {/* Display the item text */}
        </div>
      ))}
    </div>
  );
};

export default DragandDrop;