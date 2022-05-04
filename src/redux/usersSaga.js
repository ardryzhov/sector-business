import { put, call, takeEvery } from 'redux-saga/effects'
import { getUsersSuccess } from './userSlice'

function* workGetUsersFetch() {
	const saga = yield call(() =>
		fetch('https://jsonplaceholder.typicode.com/posts')
	)
	const jsonSaga = yield saga.json()
	yield put(getUsersSuccess(jsonSaga))
}

function* usersSaga() {
	yield takeEvery('users/getUsersFetch', workGetUsersFetch)
}

export default usersSaga
