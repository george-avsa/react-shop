export const reducer = (state, { type, payload }) => {
    switch (type) {
        case "INCREMENT_AMOUNT":
            return {
                ...state,
                order: state.order.map((good) => {
                    if (payload === good.id) {
                        good.amount = good.amount + 0.5;
                    }
                    return good;
                }),
            };
        case "DECREMENT_AMOUNT":
            return {
                ...state,
                order: state.order.map((good) => {
                    if (payload === good.id) {
                        good.amount = good.amount > 1 ? good.amount - 1 : 1;
                    }
                    return good;
                }),
            };
        case "DEL_PRODUCT":
            return {
                ...state,
                order: state.order.filter((good) => good.id !== payload),
            };
        case "PRODUCT_TO_CART":
            return {
                ...state,
                order: [...new Set([...state.order, payload])],
                alertProductName: payload.name,
            };
        case "SET_GOODS":
            return {
                ...state,
                goods: payload.goods,
            };
        case "SET_LOADING":
            return {
                ...state,
                loading: payload.loading,
            };
        case "SET_ISMODAL":
            return {
                ...state,
                isModal: payload.isModal,
            };
        case "SET_ALERTPRODUCT":
            return {
                ...state,
                alertProductName: payload.alertProductName,
            };
        default:
            return state;
    }
};
