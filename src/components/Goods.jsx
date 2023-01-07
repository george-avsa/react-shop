import React, { useContext } from "react";
import { Context } from "../Context";
import GoodItem from "./GoodItem";

export default function Goods() {
    const { goods } = useContext(Context);
    if (!goods.length) {
        return <h1>Пусто</h1>;
    }
    return goods.map((good) => <GoodItem key={good.id} {...good}></GoodItem>);
}
