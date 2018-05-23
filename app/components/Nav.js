import React from 'react';
import { IndexLink } from 'react-router';
import ReactClass from 'create-react-class';

const Nav = ReactClass({
	render: function () {
		return (
			<div className='top-bar'>
				<div className='top-bar-left'>
					<ul className='menu'>
						<li>
							<IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>React Time App</IndexLink>
						</li>
						<li>
							<IndexLink to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
						</li>
						<li>
							<IndexLink to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Countdown</IndexLink>
						</li>
					</ul>
				</div>
				<div className='top-bar-right'>
					<p>Created by Andy Walpole</p>
				</div>
			</div>
		);
	}
});

export default Nav;
