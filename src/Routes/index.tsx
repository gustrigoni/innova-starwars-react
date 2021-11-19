import {
  BrowserRouter as Router,
  Routes as Routing,
  Route,
} from "react-router-dom";

import { Home } from "./../screens/Home";
import { Search } from "../screens/Search";
import { Profile } from "../screens/Profile";
import { useSearch } from "../SearchContext";

export function Routes() {

  const { personData } = useSearch();

  return <Router>
    <>
      <Routing>
        <Route path='*' element={<Home />} />
        <Route path="search" element={<Search />} />
        {/* check above 1 beacuse gender is a default object */}
        <Route path="profile" element={Object.keys(personData).length > 1 ? <Profile /> : <Home />} />
      </Routing>
    </>
  </Router>

}