import React from 'react'
import { Link } from 'react-router-dom'

const Notfoundpage = () => {
	return (
		<div className='Nonfoundpage__wrap'>
			<h1>Oops! Not found page</h1>
			<span>
				Go to <Link to='/'>main</Link> page?
			</span>
		</div>
	)
}

export default Notfoundpage
