Added drag-and-drop feature to reorder list items

- Implemented a simple drag-and-drop interface using React hooks (`useState`, `useRef`), enabling users to easily reorder a list of items by dragging and dropping them.
- The list of items is managed using `useState`, while `useRef` is used to keep track of the item being dragged and the one being hovered over.
- Set up event handlers (`onDragStart`, `onDragEnter`, `onDragEnd`) to control the drag behavior and update the order of items when dropped.
- The list automatically updates as items are reordered, providing an intuitive user experience.
- Styled the items to ensure they look interactive and respond smoothly while being dragged.

This feature introduces a dynamic way to reorder list items through drag-and-drop in React.

View live demo: https://drag-and-drop-app-ebon.vercel.app/
GitHub Repo: https://github.com/Aishwarya0522/drag-and-drop-app
