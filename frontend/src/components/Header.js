import React from 'react'
import './Header.css'

function Header() {
	return (
		<header className='header'>
			<h1>JobTracker</h1>
			<nav>
				<ul className='nav-links'>
					<li>
						<a href='#'>Dashboard</a>
					</li>
					<li>
						<a href='#'>Applications</a>
					</li>
					<li>
						<a href='#'>Settings</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
