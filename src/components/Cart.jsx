import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context";

export default function Cart() {
    const { order, changeIsModal } = useContext(Context);

    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(
            order.reduce((acc, good) => {
                acc += good.amount;
                return acc;
            }, 0)
        );
    }, [order]);

    return (
        <div
            className='cart green darken-3'
            onClick={() => changeIsModal(true)}
        >
            <i className='material-icons'>shopping_cart</i>
            {count ? count : null}
        </div>
    );
}
