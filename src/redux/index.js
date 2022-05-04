import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import userSlice from './userSlice'
import usersSaga from './usersSaga'

const saga = createSagaMiddleware()

export default configureStore({
	reducer: {
		users: userSlice,
	},
	middleware: [saga],
})

saga.run(usersSaga)
