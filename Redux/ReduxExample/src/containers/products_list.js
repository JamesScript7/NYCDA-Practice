import React, {Component} from 'react';
import { connect } from 'react-redux';



class ProductsList extends Component{
  constructor(props) {
    super(props);
    console.log(this.props)
  }
  getProducts(){
    return this.props.products.map((item, i)=>{
      return (<li key={i}>{item.name}</li>)
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

export default connect(mapStateToProps)(ProductsList);