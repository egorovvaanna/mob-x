import React, { FC, useState } from "react";
import card from "../../store/card"
import { observer } from "mobx-react-lite";

import { Container, Card } from "./styles";
import { CardTypes } from "../../types/cardTypes";


export const Cards:FC = observer(() => {
    const [currentCard, setCurrentCard] = useState<CardTypes|null>(null)

   const dragStart =(event:  React.DragEvent<HTMLDivElement>, item: CardTypes ): void =>{
    setCurrentCard(item)
    const { target } = event
    if (target) (target as HTMLDivElement).style.background = "white"
}

   const dragOver =(event:  React.DragEvent<HTMLDivElement>)=>{
    event.preventDefault()
    const { target } = event
    if (target) (target as HTMLDivElement).style.background = "lightgray"
   }

   const dragLeave =(event: React.DragEvent<HTMLDivElement>)=>{
    const { target } = event
    if (target) (target as HTMLDivElement).style.background = "white"
   }

   const dragDrop =(event: React.DragEvent<HTMLDivElement>, item: CardTypes)=>{
    event.preventDefault()
    card.changeOrder( item , currentCard!)
    const { target } = event
    if (target) (target as HTMLDivElement).style.background = "white"
   }


    return(
        <Container>
        {card.word.map(card => <Card key={card.id}
        onDragStart={(e) => dragStart(e, card)}
        onDragOver={(e) => dragOver(e)}
        onDragLeave={(e)=> dragLeave(e)}
        onDrop={ (e)=> dragDrop(e,card) }
        draggable={true}
        > {card.title}</Card>)}
        </Container>
    )
})



