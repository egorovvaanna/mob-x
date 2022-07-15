import { FC } from "react";
import card from "../../store/card";
import { observer } from "mobx-react-lite";

import { CheckListItem } from "../CheckListItem/CheckListItem";
import { useInputCheck } from "../../hooks/useInputCheck";

import { ReactComponent as Completed } from "./../../utils/complete.svg";

import { Input } from "../AddCard/styles";
import { CheckListWrapper, CompleteOfCheck } from "./styles";
export interface checkListProps {
  id: number;
}

export const CheckList: FC<checkListProps> = observer(({ id }) => {
  const isCheckList = card.checkList.filter((el) => el.idCard === id);
  const allTasks = card.checkList.filter((el) => el.idCard === id);
  const completedTasks = allTasks.filter((el) => el.completed === true);

  const inputCkeck = useInputCheck(id);

  return !!isCheckList.length ? (
    <CheckListWrapper draggable={false}>
      <hr />
      {isCheckList.map((el) => (
        <CheckListItem key={el.title} checkList={el} />
      ))}

      <CompleteOfCheck>
        <Completed />
        {completedTasks.length} / {allTasks.length}
      </CompleteOfCheck>

      <Input placeholder={"New"} {...inputCkeck} />
    </CheckListWrapper>
  ) : null;
});
