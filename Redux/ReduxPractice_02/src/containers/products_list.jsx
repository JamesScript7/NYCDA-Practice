import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectProduct} from '../actions';
import {bindActionCreators} from 'redux';


class ProductsList extends Component {
  getProducts(){
    return this.props.products.map((item, i)=>{
      return <li key={i}>{item.name}</li>
    })
  }

  render() {
    return(
      <ul>
        {this.getProducts()}
      </ul>
    )
  }
}


function mapStateToProps(state){
  return{
    products: state.products
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectProduct: selectProduct}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);