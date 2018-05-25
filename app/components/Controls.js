import React from 'react';
import ReactClass from 'create-react-class';
import PropTypes from 'prop-types';

const Controls = ReactClass({
	propTypes: {
		countdownStatus: PropTypes.string.isRequired,
		onStatusChange: PropTypes.func.isRequired
	},
	onStatusChange: function(newStatus) {
		return () => {
			this.props.onStatusChange(newStatus);
		}
	},
	componentWillReceiveProps: function(newProps) {
		console.log(newProps.countdownStatus);
	},
	render: function () {
		const { countdownStatus } = this.props;

		const renderStartStopButton = () => {

			if (countdownStatus === 'started') {
				return <button className='button secondary' onClick={this.onStatusChange('paused')}>Pause</button>;
			} else if (countdownStatus === 'paused') {
				return <button className='button secondary' onClick={this.onStatusChange('started')}>Start</button>;
			}

		};
		return (
			<div className='controls'>
				{renderStartStopButton()}
				<button className='button alert hollow' onClick={this.onStatusChange('stopped')}>Clear</button>
			</div>
		)
	}
});

export default Controls;
