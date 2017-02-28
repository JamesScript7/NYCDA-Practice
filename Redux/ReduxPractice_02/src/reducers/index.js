import { combineReducers } from 'redux';
import ProductsReducer from './reducer_products';

const reducers = combineReducers({
  products: ProductsReducer
});

export default reducers;