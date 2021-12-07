import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import { route } from "../../../TavernaPixelSite/routes";
import App from '../App'

export default function RoutesView(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
            </Switch>
        </Router>
    )
}