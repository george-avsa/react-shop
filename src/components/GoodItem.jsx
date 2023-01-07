import React, { useContext } from "react";
import { Context } from "../Context";

export default function GoodItem(props) {
    const { name, id, price, full_background } = props;

    const { handleBuy } = useContext(Context);

    return (
        <div className='card'>
            <div className='card-image waves-effect waves-block waves-light'>
                {full_background && (
                    <img className='activator' src={full_background} />
                )}
            </div>
            <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                    {name}
                    <i className='material-icons right'>more_vert</i>
                </span>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <button className='btn' onClick={handleBuy} id={id}>
                        Купить
                    </button>
                    <p className='right' style={{ fontSize: "1.8rem" }}>
                        <b>{price}</b> руб.
                    </p>
                </div>
            </div>
        </div>
    );
}
