import React from "react";
import { useDrop } from "react-dnd";
import Card from "./Card";

function Column({ column, onDrop }) {
  const [{ isOver }, dropRef] = useDrop({
    accept: "card",
    drop: (card) => onDrop(card, column.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      className="column"
      ref={dropRef}
      style={{ backgroundColor: isOver ? "#aaa" : "#eee" }}
    >
      <h3>{column.title}</h3>
      {column.cards.map((card) => (
        <Card key={card.id} card={card} columnId={column.id} />
      ))}
    </div>
  );
}

export default Column;
