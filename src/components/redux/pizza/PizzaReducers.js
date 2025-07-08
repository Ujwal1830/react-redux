import { ORDER_PIZZA } from "./PizzaTypes";

const initialStateForPizza = {
    pizzaBase: 1000,
}

export const reducerForPizza = (state = initialStateForPizza, action) => {

    switch (action.type) {
        case ORDER_PIZZA:
            return {
                ...state,
                pizzaBase: state.pizzaBase - 1,
            }
        default:
            return state;
    }
}