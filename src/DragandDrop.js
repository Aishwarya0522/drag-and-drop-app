//.Implement a drag-and-drop interface: Create a component that allows users to drag and drop items to reorder them or move them between different lists. Use hooks and refs to handle the interactions
import React, { useState, useRef } from 'react';
import './App.css';

const DragandDrop = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8']);
  const dragItem = useRef();
  const dragOverItem = useRef();

  const handleDragStart = (e, index) => {
    dragItem.current = index;
  };

  const handleDragEnter = (e, index) => {
    dragOverItem.current = index;
  };

  const handleDragEnd = () => {
    const itemsCopy = [...items];
    const draggedItemContent = itemsCopy[dragItem.current];
    itemsCopy.splice(dragItem.current, 1);
    itemsCopy.splice(dragOverItem.current, 0, draggedItemContent);
    setItems(itemsCopy);
    dragItem.current = null;
    dragOverItem.current = null;
  };

  return (
    <div className="drag-and-drop">
      {items.map((item, index) => (
        <div
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragEnter={(e) => handleDragEnter(e, index)}
          onDragEnd={handleDragEnd}
          className="drag-item"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default DragandDrop;