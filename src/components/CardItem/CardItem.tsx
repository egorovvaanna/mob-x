import { FC, useState } from "react";
import { useInputCheck } from "../../hooks/useInputCheck";

import { observer } from "mobx-react-lite";
import card from "../../store/card";
import {
  dragDrop,
  dragLeave,
  dragOver,
  dragStart,
} from "../../store/dragNdrop";

import { CardBottom } from "../CardBottom/CardBottom";
import { CheckList } from "../CheckList/CheckList";
import { Button } from "../common/Button/Button";

import { CardTypes } from "../../types/cardTypes";

import { ReactComponent as close } from "./../../utils/close.svg";
import { Card, Flex } from "./styles";
import { Input } from "../AddCard/styles";

interface CardItemProps {
  cards: CardTypes;
  currentCard: CardTypes | null;
  setCurrentCard: (item: CardTypes) => void;
  draggable: boolean;
}

export const CardItem: FC<CardItemProps> = observer(
  ({ cards, currentCard, setCurrentCard }) => {
    const inputCheck = useInputCheck(cards.id);
    const [visibleBottom, setVisibleBottom] = useState<boolean>(false);

    const deleteCard = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
      card.removeWord(id);
    };

    return (
      <Card
        className="card"
        priority={cards.priority}
        onMouseEnter={() => setVisibleBottom(true)}
        onMouseLeave={() => setVisibleBottom(false)}
        onDragStart={(e) => dragStart(e, cards, setCurrentCard)}
        onDragOver={(e) => dragOver(e)}
        onDragLeave={(e) => dragLeave(e)}
        onDrop={(e) => dragDrop(e, cards, currentCard!)}
        draggable={true}>
        <Flex>
          <p>{cards.title}</p>

          <Button
            variant="secondary"
            icon={close}
            onClick={(e) => deleteCard(e, cards.id)}
          />
        </Flex>

        {cards.addCheckList && <Input {...inputCheck} placeholder={"New"} />}

        <CheckList id={cards.id} />

        <CardBottom visible={visibleBottom} id={cards.id} />
      </Card>
    );
  }
);
