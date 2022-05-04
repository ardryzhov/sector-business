import React, { useState } from 'react'
import './SearchInput.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchInput = () => {
	const [input, setInput] = useState('')
	return (
		<>
			<div className='input__wrap'>
				<input
					type='text'
					placeholder='Поиск'
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<FontAwesomeIcon className='input__icon' icon={faMagnifyingGlass} />
			</div>
		</>
	)
}

export default SearchInput
