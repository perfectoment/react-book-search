import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Search from "./pages/Search";

import Save from "./pages/Save";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <BrowserRouter basename="/" >
      <div>
      
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route path="/save" component={Save} />
            <Route component={NoMatch} />

      </div>
    </BrowserRouter>


  );
}


export default App;
