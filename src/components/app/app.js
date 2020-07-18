import React from 'react';
import './app.css';
import {
    BrowserRouter as Router,
    Switch as RouterSwitch,
    Route,
    Link
} from "react-router-dom";
import {AppWrapper} from "../../assets/style"

import Header from "../header/header";
import {HomePage} from "../homepage/HomePage";
import {CONSTANTS} from "../../CONSTANTS";
import ProductPage from "../productPage/ProductPage";


function App() {
  return (
      <Router>
          <AppWrapper>
              <Header/>
              <RouterSwitch>
                  <Route exact path={CONSTANTS.ROUTES.HOME}>
                      <HomePage/>
                  </Route>
                  <Route path={`${CONSTANTS.ROUTES.PRODUCT}/:productId`}>
                      <ProductPage/>
                  </Route>
              </RouterSwitch>
          </AppWrapper>
      </Router>

  );
}

export default App;
