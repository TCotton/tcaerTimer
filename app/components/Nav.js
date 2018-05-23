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
							<IndexLink to='/' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>React Time App</IndexLink>
						</li>
						<li>
							<IndexLink to='/' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
						</li>
						<li>
							<IndexLink to='/' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>Countdown</IndexLink>
						</li>
					</ul>
				</div>
				<div className='top-bar-right'>
					<ul className='menu'>
						<li className='menu-text'>Created by Andy Walpole</li>
					</ul>
				</div>
			</div>
		);
	}
});

export default Nav;
