import './Header.css'

function Header() {
	return (
		<header className='header'>
			<div className='header__content'>
				<h1 className='header__title'>Find Your Dream Job 🚀</h1>
				<form className='header__search-form'>
					<input
						type='text'
						placeholder='Search for jobs...'
						className='header__search-input'
					/>
					<button type='submit' className='header__search-button'>
						Search
					</button>
				</form>
			</div>
		</header>
	)
}

export default Header
