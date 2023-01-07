import React, { useContext, useEffect } from "react";
import { Context } from "../Context";

export default function Alert() {
    const { alertProductName, setAlertProductName } = useContext(Context);
    useEffect(() => {
        const timerId = setTimeout(() => {
            setAlertProductName("");
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [alertProductName]);

    return (
        <div id='toast-container'>
            <div className='toast'>{alertProductName} добавлен в корзину</div>
        </div>
    );
}
