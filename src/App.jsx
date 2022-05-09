import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./views/Landing";
import Main from "./views/Main/Main";

export default function App() {
  return (
   <Switch>
     <Route path="/list">
     <Main />
     </Route>
     <Route path='/'>
       <Landing />
     </Route>
   </Switch>    
  );
}
