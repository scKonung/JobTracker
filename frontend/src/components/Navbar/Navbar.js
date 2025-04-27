import React from 'react'
import './Navbar.css'

const Navbar = () => {
	return (
		<header className='header'>
			<div className='header__logo'>
				<h1>JobTracker</h1>
			</div>

			<nav className='header__nav'>
				<ul className='nav-links'>
					<li>
						<a href='#'>Profile</a>
					</li>
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

			<div className='header__login'>
				<a href='#'>Register</a>
			</div>
		</header>
	)
}

export default Navbar
