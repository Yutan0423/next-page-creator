"use client";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { ComponentList } from "@/components/ComponentList";
import { PageComponent } from "@/components/PageComponent";

const DndPage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex space-x-4 p-4">
        <ComponentList />
        <PageComponent />
      </div>
    </DndProvider>
  );
};

export default DndPage;
