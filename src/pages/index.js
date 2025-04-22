import Column from "@/components/Column";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const initialColumns = [
  {
    id: 1,
    title: "column 01",
    dashboardId: 10,
    cards: [
      { title: "1", id: 10 },
      { title: "2", id: 11 },
      { title: "3", id: 12 },
      { title: "4", id: 13 },
    ],
  },
  {
    id: 2,
    title: "column 02",
    dashboardId: 11,
    cards: [
      { title: "2-1", id: 14 },
      { title: "2-2", id: 15 },
      { title: "2-3", id: 16 },
      { title: "2-4", id: 17 },
    ],
  },
  {
    id: 3,
    title: "column 03",
    dashboardId: 12,
    cards: [
      { title: "3-1", id: 18 },
      { title: "3-2", id: 19 },
      { title: "3-3", id: 20 },
      { title: "3-4", id: 21 },
    ],
  },
  {
    id: 4,
    title: "column 04",
    dashboardId: 13,
    cards: [
      { title: "4-1", id: 22 },
      { title: "4-2", id: 23 },
      { title: "4-3", id: 24 },
      { title: "4-4", id: 25 },
    ],
  },
];

export default function Home() {
  const [columns, setColumns] = useState(initialColumns);

  const handleDrop = (card, toColumnId) => {
    console.log(`${card} drop!`);

    setColumns((prev) => {
      const fromColIndex = prev.findIndex(
        (col) => col.id === card.fromColumnId
      );
      const toColIndex = prev.findIndex((col) => col.id === toColumnId);

      const newCols = [...prev];

      const fromCol = {
        ...newCols[fromColIndex],
        cards: [...newCols[fromColIndex].cards],
      };
      const toCol =
        fromColIndex === toColIndex
          ? fromCol
          : {
              ...newCols[toColIndex],
              cards: [...newCols[toColIndex].cards],
            };

      const cardIndex = fromCol.cards.findIndex((c) => c.id === card.id);
      const [movedCard] = fromCol.cards.splice(cardIndex, 1);

      toCol.cards.splice(toColIndex, 0, movedCard);

      newCols[fromColIndex] = fromCol;
      newCols[toColIndex] = toCol;

      return newCols;
    });
  };

  return (
    <>
      <div>Drag and Drop</div>
      <DndProvider backend={HTML5Backend}>
        <div className="container">
          {columns.map((column) => (
            <Column key={column.id} column={column} onDrop={handleDrop} />
          ))}
        </div>
      </DndProvider>
    </>
  );
}
