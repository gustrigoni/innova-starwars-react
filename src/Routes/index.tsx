import React from "react";

import {
  BrowserRouter as Router,
  Routes as Routing,
  Route,
} from "react-router-dom";
import { Search } from "../screens/Search";

import { Home } from "./../screens/Home";

export function Routes() {
  return (
    <>
      <Router>
        <>
          <Routing>
            <Route path='*' element={<Home />} />
            <Route path="search" element={<Search />} />
          </Routing>
        </>
      </Router>
    </>
  );
}