import React from 'react';
import ReactClass from 'create-react-class';
import PropTypes from 'prop-types';

const Clock = ReactClass({
	getDefaultProps: function () {
		return {
			totalSeconds: 0
		}
	},
	propTypes: {
		totalSeconds: PropTypes.number
	},
	formatSeconds: function (totalSeconds) {
		let seconds = totalSeconds % 60
		let minutes = Math.floor(totalSeconds / 60);

		if (seconds < 10) {
			seconds = '0' + seconds;
		}

		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		return minutes + ':' + seconds;
	},
	render: function () {
		const {totalSeconds} = this.props;

		return (
			<div className='clock'>
					<span className='clock-text'>
						{this.formatSeconds(totalSeconds)}
					</span>
			</div>
		);
	}
});

export default Clock;
