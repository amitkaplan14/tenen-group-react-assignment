import React from 'react';
import './app.css';
import {
    BrowserRouter as Router,
    Switch as RouterSwitch,
    Route,
    Link
} from "react-router-dom";

import Header from "../header/header";
import {HomePage} from "../homepage/HomePage";
import {CONSTANTS} from "../../CONSTANTS";
import ProductPage from "../productPage/ProductPage";


function App() {
  return (
      <Router>
          <div>
              <Header/>
              <RouterSwitch>
                  <Route exact path={CONSTANTS.ROUTES.HOME}>
                      <HomePage/>
                  </Route>
                  <Route path={`${CONSTANTS.ROUTES.PRODUCT}/:productId`}>
                      <ProductPage/>
                  </Route>
              </RouterSwitch>
          </div>
      </Router>

  );
}

export default App;
