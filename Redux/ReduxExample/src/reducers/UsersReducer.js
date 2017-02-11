const initialState = [{name: "Ali", age: 27}]
export default function reducer(state=initialState, action) {

  switch(action.type){
    case "ADD":{
      return state = [...state, {name: action.name, age: action.age}]
    }
    default:{
      return state
    }
  }
}