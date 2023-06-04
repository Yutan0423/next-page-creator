export type UIParams = {
  id: string;
  origin: "componentList" | "pageComponent";
};

export type DragItem = UIParams & {
  type: string;
};
