import { combineReducers, createStore } from 'redux';


const userInitialValue = {name: "Ali", hobby: "Codding"}
const userReducer = (state=userInitialValue, action) => {
  switch(action.type){
    case 'ADD_NAME':{
      state = {...state, name: action.newName}
      break;
    }
    case 'ADD_HOBBY':{
      state = {...state, hobby: action.newHobby}
      break;
    }
  }

  return state;
}


const hobbyInitialValue = {hobby: "Codding", who: "Ali"}
const hobbyReducer = (state=hobbyInitialValue, action) => {
  return state;
}

const reducers = combineReducers({
  user: userReducer,
  hobby: hobbyReducer
})

const store = createStore(reducers);

store.subscribe(()=>{
  console.log('hello', store.getState());
});

store.dispatch({type: "ADD_NAME", newName: "Alex"})
store.dispatch({type: "ADD_HOBBY", newHobby: "Running"})