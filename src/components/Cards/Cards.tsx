import { FC, useState } from "react";
import card from "../../store/card";
import { observer } from "mobx-react-lite";
import { AddCard } from "../AddCard/AddCard";
import { CardItem } from "../CardItem/CardItem";

import { CardTypes } from "../../types/cardTypes";

import { Container } from "./styles";

export const Cards: FC = observer(() => {
  const [currentCard, setCurrentCard] = useState<CardTypes | null>(null);

  return (
    <Container>
      {card.word.map((card) => (
        <CardItem
          key={card.id}
          cards={card}
          draggable={true}
          currentCard={currentCard}
          setCurrentCard={setCurrentCard}
        />
      ))}
      <AddCard />
    </Container>
  );
});
