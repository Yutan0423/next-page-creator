"use client";
import React from "react";
import { useDrag } from "react-dnd";

export const Button = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "component",
    item: { type: "component" },
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
