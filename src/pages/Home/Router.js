import React from 'react'
import Contact from "../Contact/Contact"
import SignIn from "../SignIn/SignIn"
import Main from "../Main/Main"
import {Switch,Route} from "react-router-dom"

function Router() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/signin/:necip/:ibo" component={SignIn}/>
      </Switch>
    </div>
  )
}

export default Router
