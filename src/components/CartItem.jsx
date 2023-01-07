import React, { useContext } from "react";
import { Context } from "../Context";

function CartItem(props) {
    const { name, price, idGood, amount, id } = props;

    const { deleteProduct } = useContext(Context);

    const first = name === "first";

    return (
        <div className='cart-item'>
            <div>{first ? "Название" : name}</div>
            <div>{first ? "Цена" : price}</div>
            <div>
                {first ? (
                    "Количество"
                ) : (
                    <CartItemAmount
                        amount={amount}
                        idGood={idGood}
                    ></CartItemAmount>
                )}
            </div>
            <div>
                {first ? (
                    ""
                ) : (
                    <p
                        className='item-delete'
                        onClick={() => deleteProduct(id)}
                    >
                        Удалить
                    </p>
                )}
            </div>
        </div>
    );
}

function CartItemFirst() {
    return <CartItem name='first'></CartItem>;
}

function CartItemAmount({ amount, idGood }) {
    const { actionsAmount } = useContext(Context);

    return (
        <div className='item-amount'>
            <button
                className='amount-btn'
                id={`${idGood}|dec`}
                onClick={actionsAmount}
            >
                -
            </button>
            <p>{amount}</p>
            <button
                className='amount-btn'
                id={`${idGood}|inc`}
                onClick={actionsAmount}
            >
                +
            </button>
        </div>
    );
}

export { CartItem, CartItemFirst };
