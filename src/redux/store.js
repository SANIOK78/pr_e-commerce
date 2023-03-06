import { createStore } from "redux";
import cartReducer from './reducer/cartReducer';


// Création du Store
const store = createStore( cartReducer );

export default store;