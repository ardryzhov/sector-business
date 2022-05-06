import React, { useState, useEffect } from 'react'

import PostsPanel from '../components/PostsPanel'
import SearchInput from '../components/SearchInput'
import PostsList from '../components/PostsList'
import Pagination from '../components/Pagination'
import { changePage } from '../redux/userSlice'

import { getUsersFetch } from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import ClockLoader from 'react-spinners/ClockLoader'
import { css } from '@emotion/react'
import { useParams } from 'react-router-dom'

const MainPage = () => {
	const dispatch = useDispatch()

	const { page } = useParams()

	const state = useSelector((store) => store.users)

	const users = state.users
	const filtUsers = state.filtredUsers

	const currentPage = state.currentPage
	const userPerPage = state.userPerPage

	const [filtredUsers, setFilteredUsers] = useState(filtUsers)
	const [input, setInput] = useState('')

	const lastUserIdx = currentPage * userPerPage
	const firstUserIdx = lastUserIdx - userPerPage
	const currentUsers = users.slice(firstUserIdx, lastUserIdx)
	const currentFiltredUsers = filtredUsers.slice(firstUserIdx, lastUserIdx)

	const override = css`
		display: block;
		margin: 0 auto;
		border-color: red;
		margin-top: 15rem;
	`

	useEffect(() => {
		dispatch(changePage(page))
	}, [page])

	useEffect(() => {
		setFilteredUsers(filtUsers)
	}, [filtUsers])

	useEffect(() => {
		dispatch(getUsersFetch())
		dispatch(changePage(page))
	}, [])

	return (
		<div className='app-wrap'>
			<div className='container'>
				<SearchInput users={users} input={input} setInput={setInput} />
				<PostsPanel />
				{users.length ? (
					<>
						<PostsList
							currentUsers={
								filtredUsers.length || input.length
									? currentFiltredUsers
									: currentUsers
							}
						/>

						<Pagination currentPage={currentPage} />
					</>
				) : (
					<ClockLoader css={override} size={150} />
				)}
			</div>
		</div>
	)
}

export default MainPage
