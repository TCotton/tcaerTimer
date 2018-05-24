import React from 'react';
import ReactClass from 'create-react-class';

const CountdownForm = ReactClass({
	onSubmit: function (e) {
		e.preventDefault();
		const strSeconds = this.refs.seconds.value;

		if (strSeconds.match(/^[0-9]*$/)) {
			this.refs.seconds.value = '';
			this.props.onSetCountdown(Number.parseInt(strSeconds, 10));
		}
	},
	render: function () {
		return (
			<div>
				<form ref='form' onSubmit={this.onSubmit} className='countdown-form'>
					<input type='text' ref='seconds' placeholder='Enter time in seconds'/>
					<button type='submit' className='button expanded'>Start</button>
				</form>
			</div>
		);
	}
});

export default CountdownForm;
