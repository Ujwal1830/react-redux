import { connect } from "react-redux";
import { orderBurger } from "./redux";
import { useState } from "react";


const CustomerChoice = (props) => {

    const [count, setCount] = useState(1);

    const { burgerBuns, orderBurger } = props;

    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <div className="bg-[#191919] text-[#E1E1E1] shadow-2xl rounded-lg p-6 max-w-4xl w-full flex flex-col items-center gap-10">
                <h2 className="text-2xl my-2">Number of Burger Buns available - {burgerBuns}</h2>
                <input
                    className="bg-[#E1E1E1] text-[#191919] rounded-md px-3 py-2 text-2xl drop-shadow-2xl"
                    type="text" name="burgerCount" id="burgerCount"
                    placeholder="Enter your number"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                />
                <button
                    onClick={() => orderBurger(count)}
                    className="rounded bg-blue-500 hover:bg-blue-700 text-white px-2 py-2 text-xl tracking-tighter">
                    Order Burger
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        burgerBuns: state.burger.burgerBuns,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        orderBurger: (count) => dispatch(orderBurger(count)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomerChoice);