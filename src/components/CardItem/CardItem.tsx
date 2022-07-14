import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import card from "../../store/card";
import { CardTypes } from "../../types/cardTypes";
import { CardBottom } from "../CardBottom/CardBottom";
import { CheckList } from "../CheckList/CheckList";
import { Button } from "../common/Button/Button";
import { ReactComponent as close } from "./../../utils/close.svg";
import { Card } from "./styles";

interface CardItemProps {
  cards: CardTypes;
  key: number;
  currentCard: CardTypes | null;
  setCurrentCard: (item: CardTypes) => void;
  draggable: boolean;
}

export const CardItem: FC<CardItemProps> = observer(
  ({ cards, key, currentCard, setCurrentCard }) => {
    const [visibleBottom, setVisibleBottom] = useState<boolean>(false);

    const deleteCard = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
      card.removeWord(id);
    };

    const dragStart = (
      event: React.DragEvent<HTMLDivElement>,
      item: CardTypes
    ): void => {
      setCurrentCard(item);

      const current = event.currentTarget.draggable === true;
      if (current) event.currentTarget.style.removeProperty("background")
    };

    const dragOver = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const current = event.currentTarget.draggable === true;
      if (current) event.currentTarget.style.background = "lightgray";
    };

    const dragLeave = (event: React.DragEvent<HTMLDivElement>) => {
      const current = event.currentTarget.draggable === true;
      if (current) event.currentTarget.style.removeProperty("background")
    };

    const dragDrop = (
      event: React.DragEvent<HTMLDivElement>,
      item: CardTypes
    ) => {
      event.preventDefault();
      card.changeOrder(item, currentCard!);
      const current = event.currentTarget.draggable === true;
      if (current) event.currentTarget.style.removeProperty("background");
    };


    return (
      <Card
        className="card"
        priority={cards.priority}
        onMouseEnter={() => setVisibleBottom(true)}
        onMouseLeave={() => setVisibleBottom(false)}
        onDragStart={(e) => dragStart(e, cards)}
        onDragOver={(e) => dragOver(e)}
        onDragLeave={(e) => dragLeave(e)}
        onDrop={(e) => dragDrop(e, cards)}
        draggable={true}>
        {cards.title}

        <Button
          variant="secondary"
          icon={close}
          onClick={(e) => deleteCard(e, cards.id)}
        />

        <CheckList id={cards.id} />
        <CardBottom visible={visibleBottom} id={cards.id} />
      </Card>
    );
  }
);
