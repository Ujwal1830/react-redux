import './index.css';
import PizzaBox from "./components/PizzaBox";
import { Provider } from 'react-redux';
import HooksContainer from './components/HooksContainer';
import BurgerBox from './components/BurgerBox';
import store from './components/redux/store';
import CustomerChoice from './components/CustomerChoice';
import Products from './components/Products';

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <PizzaBox /> */}
        {/* <HooksContainer /> */}
        {/* <BurgerBox /> */}
        {/* <CustomerChoice /> */}
        <Products />
      </div>
    </Provider>
  );
}

export default App;
