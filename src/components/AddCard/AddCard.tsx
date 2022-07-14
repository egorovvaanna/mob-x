import { FC, useRef } from "react";
import { Button } from "../common/Button/Button";
import { AddCardWrapper, Input } from './styles';
import { ReactComponent as add } from './../../utils/add.svg'
import card from "../../store/card";
import { observer } from "mobx-react-lite";

export const AddCard:FC = observer(()=>{
    const inputRef = useRef<HTMLInputElement>(null)

const handleClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
    let title = inputRef.current!.value
    if(title.trim() !== "")  card.addWord(title)
    inputRef.current!.value =""
}

    return(
        <AddCardWrapper> 
            <Input ref={inputRef} />
            <Button icon={add} variant="secondary"  onClick={(e)=>handleClick(e)} ></Button>
        </AddCardWrapper>
    )
})
