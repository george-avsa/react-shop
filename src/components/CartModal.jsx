import React, { useContext } from "react";
import { Context } from "../Context";
import { CartItemFirst, CartItem } from "./CartItem";

export default function CartModal() {
    const { order, changeIsModal } = useContext(Context);

    const hideModal = (e) => {
        if (e.target.classList.contains("wrapper-modal")) {
            changeIsModal(false);
        }
    };

    const countAll = (order) => {
        return order.reduce((acc, good) => {
            acc += good.price * good.amount;
            return acc;
        }, 0);
    };

    return (
        <div className='wrapper-modal' onClick={hideModal}>
            <div className='modal-content'>
                <h1 className='modal-title'>Корзина</h1>
                {order.length ? (
                    <>
                        <CartItemFirst></CartItemFirst>
                        {order.map((good) => (
                            <CartItem
                                key={good.id}
                                name={good.name}
                                id={good.id}
                                price={good.price}
                                amount={good.amount}
                                idGood={good.id}
                            ></CartItem>
                        ))}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                            }}
                        >
                            <p>
                                <b>Общая сумма:</b> {countAll(order)} руб.
                            </p>
                        </div>
                    </>
                ) : (
                    <h1 className='modal-title'>Пуста</h1>
                )}
            </div>
        </div>
    );
}
