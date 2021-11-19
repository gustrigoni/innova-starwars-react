import React from "react";

import {
  BrowserRouter as Router,
  Routes as Routing,
  Route,
} from "react-router-dom";
import { Persons } from "./../screens/Persons";

import { Home } from "./../screens/Home";

export function Routes() {
  return (
    <>
      <Router>
        <>
          <Routing>
            <Route path='/' element={<Home />} />
            <Route path="persons" element={<Persons />} />
          </Routing>
        </>
      </Router>
    </>
  );
}