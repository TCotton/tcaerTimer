import React from 'react';
import ReactClass from 'create-react-class';

const Clock = ReactClass({
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
		return (
			<div>
				<h1>Clock here</h1>
			</div>
		);
	}
});

export default Clock;
