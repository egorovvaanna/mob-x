import { FC } from "react";
import card from "../../store/card";
import { Button } from "../common/Button/Button";
import { CardBottomWrapper, Hight, Low, Middle } from './styles';


interface CardBottomProps{
    visible: boolean,
    id: number
}

export const CardBottom:FC<CardBottomProps> =({visible ,id})=>{

    return(
        <CardBottomWrapper visible={visible}>
        <p>Priority: </p>
        <Hight onClick={()=>card.setPriority(id, "hight")}/>
        <Middle onClick={()=>card.setPriority(id, "middle")}/>
        <Low onClick={()=>card.setPriority(id, "low")}/>

        </CardBottomWrapper >
    )
}