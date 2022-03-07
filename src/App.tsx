import React from "react";
import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/item";
import ListItem from "./components/ListItem";
import AddArea from "./components/AddArea";

export default function App() {
  const [list, setList] = useState<Item[]>([]);

  function handleAddTask(taskName: string) {
    let novaLista = [...list];
    novaLista.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });

    setList(novaLista);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>To Do List</C.Header>
        <AddArea onEnter={handleAddTask} />
        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={handleTaskChange} />
        ))}
      </C.Area>
    </C.Container>
  );
}
