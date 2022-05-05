import React, { useState, useEffect } from 'react'
import './App.scss'

import PostsPanel from './components/PostsPanel'
import SearchInput from './components/SearchInput'
import PostsList from './components/PostsList'
import Pagination from './components/Pagination'

import { getUsersFetch } from './redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'

function App() {
	const dispatch = useDispatch()
	const state = useSelector((store) => store.users)
	const [currentPage, setCurrentPage] = useState(1)
	const [usersPerPage] = useState(10)

	const users = state.users
	const loading = state.loading

	const lastUserIdx = currentPage * usersPerPage
	const firstUserIdx = lastUserIdx - usersPerPage
	const currentUsers = users.slice(firstUserIdx, lastUserIdx)

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber)
	}

	useEffect(() => {
		dispatch(getUsersFetch())
	}, [])

	return (
		<div className='app-wrap'>
			<div className='container'>
				<SearchInput />
				<PostsPanel />
				<PostsList
					currentUsers={currentUsers}
					loading={loading}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					usersPerPage={usersPerPage}
				/>
				{loading ? (
					''
				) : (
					<Pagination
						loading={loading}
						usersPerPage={usersPerPage}
						totalPage={users.length}
						paginate={paginate}
						currentPage={currentPage}
					/>
				)}
			</div>
		</div>
	)
}

export default App
