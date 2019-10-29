import React from "react";
import {Switch, Route} from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import Dashboard from "./Components/dashboard/Dashboard";
import Post from "./Components/post/Post";
import Form from "./Components/Form/Form";

export default(
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route path ="/dashboard" component={Dashboard} />
        <Route path ="/new" component={Form} />
        <Route path="/post/:post_id" component={Post} />
    </Switch>
)