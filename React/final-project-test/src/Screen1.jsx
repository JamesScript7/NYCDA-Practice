import React from 'react';
import { connect } from 'react-redux';
import {OPEN, CLOSE} from './actions'

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  open: () =>
    dispatch({ type: OPEN }),
  close: () =>
    dispatch({ type: CLOSE }),
});

const Screen1 =(props)=>{ 
	return(
	<div>
		<h1>SCREEN 1</h1>
		<p>{props.state.isOpen ? "true" : "false"}</p>
		<button onClick={props.open}>OPEN</button>
		<button onClick={props.close}>CLOSE</button>

    <form action="/api" method="post">
      <input type="text" name="name" />
      <input type="text" name="image" />
      <input type="text" name="info" />
      <input type="text" name="price" />
      <input type="submit" name="" />
    </form>
	</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen1);