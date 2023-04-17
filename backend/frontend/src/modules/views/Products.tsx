import withRoot from '../withRoot';
import * as React from 'react';
import AppFooter from './AppFooter';
import App from '../../App';


function Products() {

    return (
        <React.Fragment>
          <div>
            Welcome
            Products:
          </div>
        <AppFooter/>
        </React.Fragment>
      );
}

export default withRoot(Products);