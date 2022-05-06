import React from 'react'
import './App.scss'

import MainPage from './pages/MainPage'
import Notfoundpage from './pages/Notfoundpage'

import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
	const currentPage = useSelector((store) => store.users.currentPage)

	return (
		<div className='app-wrap'>
			<Routes>
				<Route path='/' element={<Navigate replace to={`/${currentPage}`} />} />
				<Route path='/:page' element={<MainPage currentPage={currentPage} />} />
				<Route path='*' element={<Notfoundpage />} />
			</Routes>
		</div>
	)
}

export default App
