import { Switch, Route } from 'react-router-dom';

import {LoginPage} from "../components/LoginPage"
import {RegisterPage} from "../components/RegisterPage"

const Routes: React.FC = () =>{
  return (
    <Switch>
      <Route path="/" exact component={LoginPage} />
      <Route path="/register" exact component={RegisterPage} />
    </Switch>
  )
}

export {Routes}