import { FC } from "react";
import {  Check, CheckItem, Title, Delete } from "./styles";
import { ReactComponent as complete } from "./../../utils/complete.svg";
import { ReactComponent as uncomplete } from "./../../utils/uncomplete.svg";
import { ReactComponent as close } from "./../../utils/close.svg";
import card from "../../store/card";
import { observer } from "mobx-react-lite";
import { checkList } from "../../types/cardTypes";

export interface checkListProps {
  key: string;
  checkList: checkList;
}

export const CheckListItem: FC<checkListProps> = observer(
  ({ checkList }) => {

    const toggleCheck = (idCard: number, title: string) => {
      card.toggleCheck(idCard, title);
    };

    const deleteCheckItem = ()=>{
        card.removeCheckItem(checkList.idCard, checkList.title)
    }

    return (
      <CheckItem draggable={false}>
        <Check
          as={checkList.completed ? complete : uncomplete}
          onClick={() => toggleCheck(checkList.idCard, checkList.title)}
        />
        <Title completed={checkList.completed}>{checkList.title}</Title>
        <Delete as={close} onClick={()=>deleteCheckItem()}/>
      </CheckItem>
    );
  }
);
