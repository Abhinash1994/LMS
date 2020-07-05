import React, { Component } from 'react';
import rootRoutes from './components/web/rootRoutes';
import NotFound from './NotFound';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route path='/' component={rootRoutes}/>
						<Route component={NotFound} />	
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}
