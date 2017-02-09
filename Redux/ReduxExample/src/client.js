import { createStore } from 'redux';

//Reducer will be a data going inside store
const reducer = function(state, action) {
  if(action.type === 'INC'){
    return state+1;
  }
  return state;
};

const store  = createStore(reducer, 0);

//subscribe is for notifiying changed state and updates
store.subscribe(()=> {
  console.log('store changed', store.getState())
});


store.dispach({type: 'INC', payload: 1})