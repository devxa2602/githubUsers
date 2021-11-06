import React from 'react';
import {BrowserRouter,Switch,Route}from "react-router-dom";
import App from "./App"
import UserDetail from "./userDetail"
const Router=()=>{
	return(
	<BrowserRouter>
		<Switch>
			<Route path='/'  component={App} exact/>
		   <Route path='/UserDetail' component={UserDetail}/>
        </Switch>	
	</BrowserRouter>
	)
}
export default Router;