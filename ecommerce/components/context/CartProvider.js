import { createContext, useReducer } from "react";


const initialState = [];

export const CART_ITEM = {
    ADD_ITEM: "add_item",
    REMOVE_ITEM: "remove_item",
    REMOVE_ALLITEM: "remove_allItem",
};


function reducer(state, action) {
    const { id } = action.payload;
    console.log("payload", action.payload);

    switch (action.type) {
        case "add_item":
            return [...state, action.payload];

        case "remove_item":
            let found = false;
            const newState = state.reduce((acc, item) => {
                if (item.id === id && !found) {
                    found = true;
                    return acc;
                }
                acc.push(item);
                return acc;
            }, []);
            return [...newState];

        case "remove_allItem":
            return state.filter((item) => item.id !== id);

        default:
            return [...state];
    }

}


export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <CartContext.Provider value={{ state, dispatch }} >
                {children}
            </CartContext.Provider>
        </div>
    )
}

export default CartProvider
