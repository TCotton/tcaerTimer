import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import Main from './components/Main';
import Timer from './components/Timer';
import Countdown from './components/Countdown';

ReactDOM.render(<Router history={hashHistory}>
	<Route path="/" component={ Main }>
		<Route path='timer' component={Timer} />
		<Route path='countdown' component={Countdown} />
		<IndexRoute component={Timer} />
	</Route>
</Router>, document.getElementById('root'));
