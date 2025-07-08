import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducerForBurger } from "./burger/burgerReducers";
import { reducerForPizza } from "./pizza/PizzaReducers";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducerForProducts } from "./products/ProductsReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    pizza: reducerForPizza,
    burger: reducerForBurger,
    product: reducerForProducts,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;