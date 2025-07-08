import { ORDER_BURGER } from "./burgerTypes";


export const orderBurger = (count = 1) => {
  return {
    type: ORDER_BURGER,
    payload: count,
  };
}