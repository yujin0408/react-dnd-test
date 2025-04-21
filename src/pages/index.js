import Column from "@/components/Column";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Home() {
  const columns = [
    {
      id: 1,
      title: "column 01",
      dashboardId: 10,
    },
    {
      id: 2,
      title: "column 02",
      dashboardId: 11,
    },
    {
      id: 3,
      title: "column 03",
      dashboardId: 12,
    },
    {
      id: 4,
      title: "column 04",
      dashboardId: 13,
    },
  ];

  const handleDrop = () => {
    console.log("drop!");
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
