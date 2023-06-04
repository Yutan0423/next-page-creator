// PageComponent.tsx
import { DragItem } from "@/types/dnd";
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { uuid } from "uuidv4";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { TextInput } from "./TextInput";

type ComponentType = {
  id: string;
  type: string;
  left: number;
  top: number;
};

export const PageComponent = () => {
  const [components, setComponents] = useState<ComponentType[]>([]);
  console.log(components);

  const [{ isOver }, drop] = useDrop<DragItem, void, { isOver: boolean }>(
    () => ({
      accept: ["button", "textInput", "heading"],
      drop: (item, monitor) => {
        const offset = monitor.getClientOffset();
        if (!offset) return;

        const dropTargetElement = document.elementFromPoint(offset.x, offset.y);
        if (!dropTargetElement) return;

        const dropTargetRects = dropTargetElement.getBoundingClientRect();
        const left = offset.x - dropTargetRects.left;
        const top = offset.y - dropTargetRects.top;
        const type = item.type;

        // 新規コンポーネントの作成
        if (item.origin === "componentList") {
          const id = uuid();
          setComponents((prev) => [...prev, { id, type, left, top }]);
        }
        // 既存コンポーネントの移動
        else if (item.origin === "pageComponent") {
          setComponents((prev) =>
            prev.map((component) =>
              component.id === item.id ? { ...component, left, top } : component
            )
          );
        }
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    })
  );

  const backgroundColor = isOver ? "bg-green-200" : "bg-gray-200";

  return (
    <div
      ref={drop}
      className={`w-4/5 h-96 border border-sky-200 rounded relative ${backgroundColor}`}
    >
      {components.map((component) => {
        let item;
        switch (component.type) {
          case "button":
            item = <Button id={component.id} origin={"pageComponent"} />;
            break;
          case "textInput":
            item = <TextInput id={component.id} origin={"pageComponent"} />;
            break;
          case "heading":
            item = <Heading id={component.id} origin={"pageComponent"} />;
            break;
          default:
            break;
        }
        return (
          <>
            <div
              key={component.id}
              style={{
                position: "absolute",
                left: component.left,
                top: component.top,
              }}
            >
              {item}
            </div>
          </>
        );
      })}
    </div>
  );
};
