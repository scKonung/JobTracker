import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Header from './containers/Header/Header'
import Vacancies from './containers/Vacancies/Vacancies'

const App = () => {
	return (
		<>
			<Navbar />
			<Header />
			<Vacancies />
			<Footer />
		</>
	)
}

export default App
