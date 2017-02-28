import React, {Component} from 'react';
import ProductsList from './containers/products_list.js';

class App extends Component{
  
  render() {
    return(
      <div>
  
        <ProductsList />
    
      </div>
    )
  }
}

export default App;

































// import {createStore} from 'redux';

// const reducer = (state={}, action)=>{
//   switch(action.type){
//     case "SAY":{
//       return state = {text: action.text};
//       break;
//     }
//     case "BYE":{
//       return state = {text: action.text};
//       break;
//     }
//     return state;
//   }
// };

// const store = createStore(reducer);

// store.subscribe(()=>{
//   console.log('Hello', store.getState())
// });

// store.dispatch((diapatch){
//   dispatch({type: "SAY", text: "Hello man"});
//   dispatch({type: "BYE", text: "Goodbye my love"});
// });