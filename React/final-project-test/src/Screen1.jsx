import React from 'react';
import { connect } from 'react-redux';
import {ADD} from './actions'

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  open: () =>
    dispatch({ type: ADD, name: "Ali", age: "27" })
});

const Screen1 =(props)=>{ 
	return(
	<div>
		<h1>SCREEN 1</h1>
		<p>{props.state.name}{console.log(props.state)}</p>
		<button onClick={props.product}>OPEN</button>
    <form action="/api/products" method="post">
      <p><label></label><input type="text" name="name" /></p>
      <p><label></label><input type="text" name="image" /></p>
      <p><label></label><input type="text" name="info" /></p>
      <p><label></label><input type="text" name="price" /></p>
      <button type="submit">SEND</button>
    </form>
	</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen1);