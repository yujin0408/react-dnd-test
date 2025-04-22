import React from "react";
import { useDrag } from "react-dnd";

const ItemTypes = {
  CARD: "card",
};

function Card({ card, columnId }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: ItemTypes.CARD,
    item: { ...card, fromColumnId: columnId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={dragRef} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {card.title}
    </div>
  );
}

export default Card;
