import React from 'react'
import Contact from "../Contact/Contact"
import SignIn from "../SignIn/SignIn"
import Main from "../Main/Main"
import {Switch,Route} from "react-router-dom"
import UserDetails from "../UserDetails/UserDetails"
function Router() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/user/:id" component={UserDetails}/>
       
      </Switch>
    </div>
  )
}

export default Router
