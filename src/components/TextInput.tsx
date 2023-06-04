// TextInput.tsx
import { UIParams } from "@/types/dnd";
import React, { FC, useState } from "react";
import { useDrag } from "react-dnd";

type Props = UIParams;

export const TextInput: FC<Props> = ({ id, origin }) => {
  const [value, setValue] = useState("");

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "textInput",
    item: { id, origin, type: "textInput" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`flex ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
