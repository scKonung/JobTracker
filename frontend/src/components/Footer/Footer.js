import React from 'react'
import './Footer.css'

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__content'>
				<p>
					&copy; {new Date().getFullYear()} JobTracker. All rights reserved.
				</p>
				<div className='footer__links'>
					<a href='#'>Privacy Policy</a>
					<a href='#'>Terms of Service</a>
					<a href='#'>Contact</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
