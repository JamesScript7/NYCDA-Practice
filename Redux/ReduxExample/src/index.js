import { combineReducers, createStore } from 'redux';

const usersDefaultValue = {name: 'Alisher', age: 27}
const userReducer = (state=usersDefaultValue, action) => {
  return state;
};


const tweetsDefaultValues = {tweet: 'Reaxt is very easy', author: usersDefaultValue.name}
const tweeetsReducer = (state=tweetsDefaultValues, action) => {
  return state;
};


const reducers = combineReducers({
  user: userReducer,
  tweets: tweeetsReducer
})

const store = createStore(reducers);


store.subscribe(()=>{
  console.log('added something', store.getState());
});

store.dispatch({
  type: "ADD",
  num: 10
});