"use client";
import React from "react";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { TextInput } from "./TextInput";
import { Spacer } from "./Util/Spacer";

export const ComponentList = () => {
  return (
    <div className="w-1/5">
      <h2 className="text-2xl font-bold mb-4">Components</h2>
      <Button id={"sample1"} origin={"componentList"} />
      <Spacer size={2} />
      <TextInput id={"sample2"} origin={"componentList"} />
      <Spacer size={2} />
      <Heading id={"sample3"} origin={"componentList"} />
    </div>
  );
};
