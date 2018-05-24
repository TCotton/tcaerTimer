import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';
import ReactClass from 'create-react-class'

const Countdown = ReactClass({
	getInitialState: function() {
		return {
			count: 0
		}
	},
	handleSetCountdown: function(seconds) {
		this.setState({
			count: seconds
		});
	},
	render: function () {
		return (
		<div>
			<Clock totalSeconds={this.state.count} />
			<CountdownForm onSetCountdown={this.handleSetCountdown}/>
		</div>
		);
	}
});

export default Countdown;
