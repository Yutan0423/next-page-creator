"use client";
import { UIParams } from "@/types/dnd";
import React, { FC } from "react";
import { useDrag } from "react-dnd";

type Props = UIParams;

export const Heading: FC<Props> = ({ id, origin }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "heading",
    item: { id, origin, type: "heading" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`flex ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      <h2>タイトルを入力してください</h2>
    </div>
  );
};
