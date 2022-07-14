import { FC } from "react";
import { Cards } from "../Cards/Cards";
import { Header } from "./Header/Header";


export const Layout:FC = ()=>{
    return(
        <div>
            <Header/>
            <Cards/>
        </div>
    )
}