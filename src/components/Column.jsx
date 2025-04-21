import React from "react";
import { useDrop } from "react-dnd";

function Column({ column, onDrop }) {
  const [{ isOver }, dropRef] = useDrop({
    accept: "card",
    drop: (card) => onDrop(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      className="column"
      ref={dropRef}
      style={{ backgroundColor: isOver ? "#eee" : "#111" }}
    >
      {column.title}
    </div>
  );
}

export default Column;
