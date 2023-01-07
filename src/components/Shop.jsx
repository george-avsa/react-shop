import React, { useContext, useEffect, useReducer, useState } from "react";
import { API_KEY, API_URL } from "../config";
import { Context } from "../Context";
import { reducer } from "../Reducer";
import Alert from "./Alert";
import Cart from "./Cart";
import CartModal from "./CartModal";
import Goods from "./Goods";
import Preloader from "./Preloader";

export default function Shop() {
    const { setGoods, changeLoading, loading, isModal, alertProductName } =
        useContext(Context);

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data?.featured) {
                    setGoods(data.featured);
                    changeLoading(false);
                } else {
                    throw new Error();
                }
            })
            .catch((e) => {
                setGoods([]);
                changeLoading(false);
            });
    }, []);

    return (
        <main className='container content goods'>
            {loading ? <Preloader></Preloader> : <Goods></Goods>}
            <Cart></Cart>
            {isModal && <CartModal></CartModal>}
            {alertProductName && <Alert></Alert>}
        </main>
    );
}
