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
import { useParams, useNavigate } from 'react-router-dom'

const MainPage = () => {
	const dispatch = useDispatch()

	const { page } = useParams()
	const navigate = useNavigate()

	const state = useSelector((store) => store.users)

	const {
		users,
		filtredUsers,
		currentPage,
		userPerPage,
		totalPage,
		filtredPage,
	} = state

	const [filtUsers, setFiltUsers] = useState(filtredUsers)
	const [input, setInput] = useState('')

	const lastUserIdx = currentPage * userPerPage
	const firstUserIdx = lastUserIdx - userPerPage
	const currentUsers = users.slice(firstUserIdx, lastUserIdx)
	const currentFiltredUsers = filtUsers.slice(firstUserIdx, lastUserIdx)

	const override = css`
		display: block;
		margin: 0 auto;
		border-color: red;
		margin-top: 15rem;
	`

	useEffect(() => {
		setFiltUsers(filtredUsers)
	}, [filtredUsers])

	useEffect(() => {
		dispatch(getUsersFetch())
		dispatch(changePage(page))
	}, [])

	useEffect(() => {
		dispatch(changePage(page))
		if (!Number(+page)) {
			navigate('/1')
		}
		if (
			!totalPage.length &&
			(page > totalPage.length || page > filtredPage.length)
		) {
			navigate('/1')
		}
	}, [page, totalPage])

	return (
		<div className='app-wrap'>
			<div className='container'>
				<SearchInput users={users} input={input} setInput={setInput} />
				<PostsPanel />
				{users.length ? (
					<>
						<PostsList
							currentUsers={
								filtUsers.length || input.length
									? currentFiltredUsers
									: currentUsers
							}
						/>

						<Pagination currentPage={currentPage} input={input} />
					</>
				) : (
					<ClockLoader css={override} size={150} />
				)}
			</div>
		</div>
	)
}

export default MainPage
