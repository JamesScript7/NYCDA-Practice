import React, {Component} from 'react';
import ProductsList from './containers/products_list.jsx';

class App extends Component{
  render() {
    return(
      <div>
        <ul>
          Products are coming soon ...
          <ProductsList />
        </ul>
      </div>
    )
  }
}

export default App;