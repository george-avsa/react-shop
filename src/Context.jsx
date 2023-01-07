import { createContext, useReducer } from "react";
import { reducer } from "./Reducer";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const initialState = {
        goods: [],
        loading: true,
        order: [],
        isModal: false,
        alertProductName: "",
    };

    const [value, dispatch] = useReducer(reducer, initialState);

    value.actionsAmount = (e) => {
        const [id, action] = e.target?.id?.split("|");
        if (id && action) {
            if (action === "inc") {
                dispatch({ type: "INCREMENT_AMOUNT", payload: id });
            }
            if (action === "dec") {
                dispatch({ type: "DECREMENT_AMOUNT", payload: id });
            }
        }
    };

    value.deleteProduct = (id) => {
        dispatch({ type: "DEL_PRODUCT", payload: id });
    };

    value.handleBuy = (e) => {
        const idProduct = e.target?.getAttribute("id");
        if (idProduct) {
            const product = value.goods.find((good) => good.id === idProduct);
            const orderItem = value.order.find(
                (good) => good.id === product.id
            );
            const count = orderItem?.amount + 1 || 1;
            product.amount = count;
            dispatch({ type: "PRODUCT_TO_CART", payload: product });
        }
    };

    value.setGoods = (newValue) => {
        dispatch({ type: "SET_GOODS", payload: { goods: newValue } });
    };

    value.changeIsModal = (newValue) => {
        dispatch({ type: "SET_ISMODAL", payload: { isModal: newValue } });
    };

    value.changeLoading = (newValue) => {
        dispatch({ type: "SET_LOADING", payload: { loading: newValue } });
    };

    value.setAlertProductName = (newValue) => {
        dispatch({
            type: "SET_ALERTPRODUCT",
            payload: { alertProductName: newValue },
        });
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};
