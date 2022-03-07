import { useState, KeyboardEvent } from "react";
import * as C from "./styles";

type Props = {
  onEnter: (taskName: string) => void;
};

export default function AddArea({ onEnter }: Props) {
  const [tarefa, setTarefa] = useState("");

  function handleKeyUp(e: KeyboardEvent) {
    if (e.code === "Enter" && tarefa !== "") {
      onEnter(tarefa);
      setTarefa("");
    }
  }
  return (
    <C.Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={tarefa}
        onChange={(e) => {
          setTarefa(e.target.value);
        }}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
}
