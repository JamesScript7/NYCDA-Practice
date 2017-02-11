import React from 'react';
import { connect } from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {addUsers} from './actions/UserActions';
// import {addBooks} from './actions/BookActions';



class App extends React.Component {
  
  render() {
    console.log("hello",this.props.users.map((user)=>{
      return user.name
    }))
    return(
      <h1>Hello {this.props.users.map((user)=>{
      return user.name
    })}</h1>
    )
  } 
}

function mapToStateToProps(state) {
  return{
    users: state.users
  }
}
export default connect(mapToStateToProps)(App);


































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