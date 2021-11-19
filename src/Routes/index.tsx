import React from "react";

import {
  BrowserRouter as Router,
  Routes as Routing,
  Route,
} from "react-router-dom";

import { Home } from "./../screens/Home";
import { Search } from "../screens/Search";
import { Profile } from "../screens/Profile";

export function Routes() {
  return (
    <>
      <Router>
        <>
          <Routing>
            <Route path='*' element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="profile" element={<Profile />} />
          </Routing>
        </>
      </Router>
    </>
  );
}