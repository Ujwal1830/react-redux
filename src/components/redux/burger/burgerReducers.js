import { ORDER_BURGER } from "./burgerTypes";

const initialStateForBurger = {
    burgerBuns: 1000,
}

export const reducerForBurger = (state = initialStateForBurger, action) => {

    switch (action.type) {
        case ORDER_BURGER:
            return {
                ...state,
                burgerBuns: state.burgerBuns - action.payload,
            }
        default:
            return state;
    }
}

