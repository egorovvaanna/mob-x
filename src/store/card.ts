import { makeAutoObservable } from "mobx";
import { CardTypes } from "../types/cardTypes";

const sortCard = (a: CardTypes, b:CardTypes) => {
    if(a.order > b.order) return 1
    if(a.order < b.order) return -1
    else return 0
}


class Card {
    word: CardTypes[] = [
        {id: 1, order: 1, title: "some 1 mobX"},
        {id: 2, order: 2, title: "some 2 mobX"},
        {id: 3, order: 3, title: "some 3 mobX"},
]
    constructor(){
        makeAutoObservable(this)
    }

    changeOrder( card: CardTypes, currentCard: CardTypes){
        this.word = this.word.map( el  => {
            if (el.id === card.id) {
            return {...el, order: currentCard.order}
            }
            if(el.id === currentCard.id){
                return {...el, order: card.order}
            }
            else return {...el}
        }).sort(sortCard)
     }

}

export default new Card()