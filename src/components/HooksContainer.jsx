import { useDispatch, useSelector } from "react-redux";
import { orderPizza } from "./redux";

const HooksContainer = () => {
    const pizzaBase = useSelector(state => state.pizza.pizzaBase);
    const dispatch = useDispatch();


    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <div className="bg-white shadow-2xl rounded-lg p-6 max-w-4xl w-full flex flex-col items-center">
                <h2 className="text-2xl my-2">Number of Pizza Base available - {pizzaBase}</h2>
                <button
                    onClick={() => dispatch(orderPizza())}
                    className="rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2">
                    Order Pizza
                </button>
            </div>
        </div>
    );
};

export default HooksContainer;