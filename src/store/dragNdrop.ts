import card from "./card";
import { CardTypes } from "../types/cardTypes";



export const dragStart = (
  event: React.DragEvent<HTMLDivElement>,
  item: CardTypes,
  setCurrentCard: (item: CardTypes) => void
): void => {
  setCurrentCard(item);

  const current = event.currentTarget.draggable === true;
  if (current) event.currentTarget.style.removeProperty("background");
};

export const dragOver = (event: React.DragEvent<HTMLDivElement>) => {
  event.preventDefault();
  const current = event.currentTarget.draggable === true;
  if (current) event.currentTarget.style.background = "lightgray";
};

export const dragLeave = (event: React.DragEvent<HTMLDivElement>) => {
  const current = event.currentTarget.draggable === true;
  if (current) event.currentTarget.style.removeProperty("background");
};

export const dragDrop = (
  event: React.DragEvent<HTMLDivElement>,
  item: CardTypes,
  currentCard: CardTypes
) => {
  event.preventDefault();
  card.changeOrder(item, currentCard!);
  const current = event.currentTarget.draggable === true;
  if (current) event.currentTarget.style.removeProperty("background");
};
