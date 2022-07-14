import { makeAutoObservable } from "mobx";
import { CardTypes } from "../types/cardTypes";

const sortCard = (a: CardTypes, b: CardTypes) => {
  if (a.order > b.order) return 1;
  if (a.order < b.order) return -1;
  else return 0;
};

class Card {
  word: CardTypes[] = [{ id: 1, order: 1, title: "some 1 mobX" }];
  constructor() {
    makeAutoObservable(this);
  }

  changeOrder(card: CardTypes, currentCard: CardTypes) {
    this.word = this.word
      .map((el) => {
        if (el.id === card.id) {
          return { ...el, order: currentCard.order };
        }
        if (el.id === currentCard.id) {
          return { ...el, order: card.order };
        } else return { ...el };
      })
      .sort(sortCard);
  }
  addWord(title: string) {
    let id = Date.now();
    let num = this.word.length + 1;
    this.word.push({ id, order: num, title });
  }
  removeWord(id: number) {
    this.word = this.word.filter((el) => el.id !== id);
  }
}

export default new Card();
