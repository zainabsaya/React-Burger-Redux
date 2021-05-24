import logo from './logo.svg';
import './App.css';
import Burger from './Componets/Burger'
import BurgerRedux from './Componets/BurgerRedux'
import {Provider} from 'react-redux'
import store from './store';


function App() {
  return (
    <div className="BurgerContent">
    {/* <Burger/> */}
    <Provider store={store}>
    <BurgerRedux/>
    </Provider>
    </div>
  );
}

export default App;
