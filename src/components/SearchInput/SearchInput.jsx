import React, { useState } from 'react'
import './SearchInput.scss'

import { filterUsers } from '../../redux/userSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SearchInput = ({ users, input, setInput }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const fiterUser = (text) => {
		setInput(text)
		if (text.length) {
			const newState = users.filter((v) => {
				const title = v.title.toLowerCase()
				const body = v.body.toLowerCase()

				if (
					title.includes(text.toLowerCase()) ||
					body.includes(text.toLowerCase())
				) {
					return v
				}
			})
			navigate('/1')
			return dispatch(filterUsers(newState))
		}
		dispatch(filterUsers([]))
		navigate('/1')
	}

	return (
		<>
			<div className='input__wrap'>
				<input
					type='text'
					placeholder='Поиск'
					value={input}
					onChange={(e) => fiterUser(e.target.value)}
				/>
				<FontAwesomeIcon className='input__icon' icon={faMagnifyingGlass} />
			</div>
		</>
	)
}

export default SearchInput
