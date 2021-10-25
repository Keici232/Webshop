import { createContext, useReducer } from "react";


const initialState = [];

export const CART_ITEM = {
    ADD_ITEM: "add_item",
};


function reducer(state, action) {
    const { id } = action.payload;
    console.log(action.payload);

    switch (action.type) {
        case "add_item":
            return [...state, action.payload];

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
