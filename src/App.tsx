import React from "react";
import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/item";
import ListItem from "./components/ListItem";
import AddArea from "./components/AddArea";

export default function App() {
  const [list, setList] = useState<Item[]>([
    { id: 10, name: "teste", done: true },
    { id: 11, name: "teste2", done: false },
  ]);
  return (
    <C.Container>
      <C.Area>
        <C.Header>To Do List</C.Header>
        <AddArea></AddArea>
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
}
