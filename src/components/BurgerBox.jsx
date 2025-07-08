import { connect } from "react-redux";
import { orderBurger } from "./redux";


const BurgerBox = (props) => {

    const { burgerBuns, orderBurger } = props;

    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <div className="bg-white shadow-2xl rounded-lg p-6 max-w-4xl w-full flex flex-col items-center">
                <h2 className="text-2xl my-2">Number of Burger Buns available - {burgerBuns}</h2>
                <button
                    onClick={orderBurger}
                    className="rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2">
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
        orderBurger: () => dispatch(orderBurger()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BurgerBox);