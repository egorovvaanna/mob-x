import { observer } from "mobx-react-lite";
import { FC } from "react";
import card from "../../store/card";
import { CardTypes } from "../../types/cardTypes";
import { Button } from "../common/Button/Button";
import { ReactComponent as close } from "./../../utils/close.svg";
import { Card } from "./styles";



interface CardItemProps {
  cards: CardTypes;
  key: number;
  currentCard: CardTypes|null,
  setCurrentCard: (item: CardTypes)=> void,
  draggable: boolean
}

export const CardItem: FC<CardItemProps> = observer(({cards , key ,currentCard, setCurrentCard}) => {

  const deleteCard = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    card.removeWord(id);
  };
  const dragStart = (
    event: React.DragEvent<HTMLDivElement>,
    item: CardTypes
  ): void => {
    setCurrentCard(item);
    const { target } = event;
    if (target) (target as HTMLDivElement).style.background = "white";
  };

  const dragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const { target } = event;
    if (target) (target as HTMLDivElement).style.background = "lightgray";
  };

  const dragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    const { target } = event;
    if (target) (target as HTMLDivElement).style.background = "white";
  };


  const dragDrop = (
    event: React.DragEvent<HTMLDivElement>,
    item: CardTypes
  ) => {
    event.preventDefault();
    card.changeOrder(item, currentCard!);
    const { target } = event;
    if (target) (target as HTMLDivElement).style.background = "white";
  };

  return (
    <Card
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
    </Card>
  );
});
