import { makeAutoObservable } from "mobx";
import { CardTypes, checkList, Priority } from "../types/cardTypes";

const sortCard = (a: CardTypes, b: CardTypes) => {
  if (a.order > b.order) return 1;
  if (a.order < b.order) return -1;
  else return 0;
};

class Card {
  word: CardTypes[] = [
    { id: 1, order: 1, title: "some 1 mobX", priority: "none", addCheckList: false },
    { id: 2, order: 2, title: "some 2 mobX", priority: "hight", addCheckList: false },
  ];
  checkList: checkList[] = [
    { idCard: 1, title: "do it", completed: true },
    {
      idCard: 1,
      title:
        "do itffffffffff ffftfffffffffffff tfffffffffffff tfffffffffffff tfffffffffffff  too",
      completed: false,
    },
    { idCard: 2, title: "do it too23", completed: false },
  ];
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
    this.word.push({ id, order: num, title, priority: "none", addCheckList: false });
  }

  removeWord(id: number) {
    this.word = this.word.filter((el) => el.id !== id);
  }

  toggleCheck(id: number, title: string) {
    this.checkList = this.checkList.map((el) =>
      el.idCard === id && el.title === title
        ? { ...el, completed: !el.completed }
        : el
    );
  }

  addCheckItem(idCard: number, title: string) {
    this.checkList.push({ idCard, title, completed: false });
  }

  removeCheckItem(id: number, title: string) {
    this.checkList = this.checkList.filter((el) => el.title !== title);
  }

  setPriority(id: number, priority: Priority) {
    this.word = this.word.map((el) => el.id === id ? { ...el, priority }: { ...el });
  }
   toggleAddCheckList (id: number, isCheckList: boolean){
    this.word = this.word.map(el => el.id === id ? {...el, addCheckList: isCheckList} : {...el})
   }
}

export default new Card();
