import React from "react";
import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/item";
export default function App() {
  const [list, setList] = useState<Item[]>([
    { id: 10, name: "teste", done: true },
  ]);
  return (
    <C.Container>
      <C.Area>
        <C.Header>To Do List</C.Header>
      </C.Area>
    </C.Container>
  );
}
