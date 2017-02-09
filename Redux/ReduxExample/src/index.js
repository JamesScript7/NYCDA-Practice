import { applyMiddleware, createStore } from 'redux';

const reducer = (state=0, action) => {
  if(action.type === "INC"){
    return state + 1;
  }else if (action.type === "E"){
    throw new Error('AHHHHHHHH');
  }
  return state;

};

const logger =(store) => (next) => (action) =>{
  console.log("action fired", action);
};

const error = (store) => (next) => (action) =>{
  try {
    next(action);
  } catch(e) {
    console.log("Error", e)
  }
}


const middleware = applyMiddleware(logger, error);

const store = createStore(reducer, 1, middleware);

store.subscribe(() => {
  console.log("store changed", store.getState())
});

store.dispatch({type: "INC"});
store.dispatch({type: "INC"});
store.dispatch({type: "INC"});
store.dispatch({type: "E"});