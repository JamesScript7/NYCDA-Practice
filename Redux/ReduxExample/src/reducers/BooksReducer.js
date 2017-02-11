const initialState = [{title: "Life of Ali", page: 222}]
export default function reducer(state=initialState, action) {

  switch(action.type){
    case "ADD":{
      return state = [...state, {title: action.title, page: action.page}]
    }
    default:{
      return state
    }
  }
}