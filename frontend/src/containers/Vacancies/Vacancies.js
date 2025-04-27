import React from 'react'
import './Vacancies.css' // Styles for the job cards

// Sample job data
const vacancies = [
	{
		id: 1,
		title: 'Frontend Developer',
		company: 'Company ABC',
		salary: '80,000 - 100,000 $',
		location: 'Mexico',
		description: 'Developing user interfaces for web applications.',
	},
	{
		id: 2,
		title: 'Backend Developer',
		company: 'Company XYZ',
		salary: '90,000 - 120,000 $',
		location: 'New York',
		description: 'Developing the server-side components of applications.',
	},
	{
		id: 3,
		title: 'UI/UX Designer',
		company: 'Company 123',
		salary: '70,000 - 90,000 $',
		location: 'Kyiv',
		description: 'Designing user interfaces and user experiences.',
	},
]

function Vacancies() {
	return (
		<section id='vacancies' className='vacancies-section'>
			<h2>Top Jobs for You</h2>
			<div className='vacancies-container'>
				{vacancies.map(vacancy => (
					<div key={vacancy.id} className='vacancy-card'>
						<h3>{vacancy.title}</h3>
						<p>
							<strong>{vacancy.company}</strong>
						</p>
						<p>{vacancy.description}</p>
						<p className='salary'>{vacancy.salary}</p>
						<p className='location'>{vacancy.location}</p>
						<button className='button'>Apply Now</button>
					</div>
				))}
			</div>
		</section>
	)
}

export default Vacancies
