import {ADD} from '../actions'

const initialState = {
	name: "hello",
  age: '20'
}

export default (state = initialState, action) => {
  // console.log(action)
  // console.log(state)

  switch (action.type) {
    case ADD:
      return  {name: action.name, age: action.age}
    default:
      return state
  }
};
