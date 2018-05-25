import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';
import ReactClass from 'create-react-class'
import Controls from './Controls';

const Countdown = ReactClass({
	getInitialState: function () {
		return {
			count: 0,
			countdownStatus: 'stopped'
		}
	},
	componentDidUpdate: function (prevProps, prevState) {
		if (this.state.countdownStatus !== prevState.countdownStatus) {
			switch (this.state.countdownStatus) {
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({count: 0});
					break;
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	},
	startTimer: function () {
		this.timer = setInterval(() => {
			const newCount = this.state.count - 1;
			this.setState({
				count: newCount >= 0 ? newCount : 0
			});

		}, 1000);
	},
	handleSetCountdown: function (seconds) {
		this.setState({
			count: seconds,
			countdownStatus: 'started'
		});
	},
	handleStatusChange: function (newStatus) {
		this.setState({
			countdownStatus: newStatus
		});
	},
	render: function () {
		const {count, countdownStatus} = this.state;
		const renderControlArea = () => {
			if (countdownStatus !== 'stopped') {
				return <Controls countdownStatus={countdownStatus} onStatusChange />
			} else {
				return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
			}
		}

		return (
			<div>
				<Clock totalSeconds={count}/>
				{renderControlArea()}
			</div>
		);
	}
});

export default Countdown;
