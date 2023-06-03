"use client";
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { Button } from "./Button";

type Component = {
  left: number;
  top: number;
  item: JSX.Element;
};

export const PageComponent = () => {
  const [components, setComponents] = useState<Component[]>([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "component",
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      if (!offset) return;

      const dropTargetElement = document.elementFromPoint(offset.x, offset.y);
      if (!dropTargetElement) return;

      const dropTargetRects = dropTargetElement.getBoundingClientRect();
      const left = offset.x - dropTargetRects.left;
      const top = offset.y - dropTargetRects.top;

      setComponents([...components, { left, top, item: <Button /> }]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const backgroundColor = isOver ? "bg-green-200" : "bg-gray-200";

  return (
    <div
      ref={drop}
      className={`w-4/5 h-96 border border-sky-200 rounded relative ${backgroundColor}`}
    >
      {components.map((component, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            left: component.left,
            top: component.top,
          }}
        >
          {component.item}
        </div>
      ))}
    </div>
  );
};
