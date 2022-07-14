import { FC, useRef, KeyboardEvent } from "react";
import { CheckListWrapper } from "./styles";
import { Button } from "../common/Button/Button";
import card from "../../store/card";
import { observer } from "mobx-react-lite";
import { CheckListItem } from "../CheckListItem/CheckListItem";
import { Input } from "../AddCard/styles";

export interface checkListProps {
  id: number;
}

export const CheckList: FC<checkListProps> = observer(({ id }) => {
  const isCheckList = card.checkList.filter((el) => el.idCard === id);
  const inputRef = useRef<HTMLInputElement>(null);

  const addCheckItem = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      const title = inputRef.current!.value.trim();
      title && card.addCheckItem(id, title);
      inputRef.current!.value = "";
    }
  };

  return !!isCheckList.length ? (
    <CheckListWrapper draggable={false}>
      <hr />

      {isCheckList.map((el) => (
        <CheckListItem key={el.title} checkList={el} />
      ))}

      <Input
        ref={inputRef}
        placeholder={"New"}
        onKeyDown={(e) => addCheckItem(e)}
      />
    </CheckListWrapper>
  ) : (
    <></>
  );
});
