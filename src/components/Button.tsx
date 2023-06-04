"use client";
import { UIParams } from "@/types/dnd";
import React, { FC } from "react";
import { useDrag } from "react-dnd";

type Props = UIParams;

export const Button: FC<Props> = ({ id, origin }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "button",
    item: { id, origin, type: "button" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`flex ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
  );
};
