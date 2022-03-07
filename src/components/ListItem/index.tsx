import * as C from "./styles";
import { Item } from "../../types/item";

type Props = {
  item: Item;
  onChange: (id: number, done: boolean) => void;
};

export default function ListItem({ item, onChange }: Props) {
  return (
    <C.Container done={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => onChange(item.id, e.target.checked)}
      />
      <label>
        {item.name} - <span>{item.done ? "Concluído" : "Pendente"}</span>
      </label>
    </C.Container>
  );
}
