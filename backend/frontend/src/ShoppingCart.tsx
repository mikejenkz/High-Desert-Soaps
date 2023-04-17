import withRoot from './modules/withRoot';
import * as React from 'react';


function ShoppingCart() {
    let cart = []

    return (
        <React.Fragment>
          <div>
            You are in the Shopping Cart
          </div>

        </React.Fragment>
      );
}

export default withRoot(ShoppingCart);