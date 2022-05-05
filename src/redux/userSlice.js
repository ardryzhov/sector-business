import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
	name: 'users',
	initialState: {
		users: [],
		loading: false,
	},
	reducers: {
		getUsersFetch(state) {
			state.loading = true
		},
		getUsersSuccess(state, action) {
			state.loading = false
			state.users = [...action.payload]
		},
		getUsersFailure(state) {
			state.loading = false
			console.log('Oops! Something go wrong')
		},
		sortUsers(state, action) {
			const tag = action.payload.tag
			function sortByTag(field) {
				return (a, b) => (a[field] > b[field] ? 1 : -1)
			}
			if (tag === 'id') {
				state.users = state.users.sort(sortByTag('id'))
			}
			if (tag === 'title') {
				state.users = state.users.sort(sortByTag('title'))
			}
			if (tag === 'body') {
				state.users = state.users.sort(sortByTag('body'))
			}
		},
	},
})

export const { getUsersFetch, getUsersSuccess, getUsersFailure, sortUsers } =
	userSlice.actions
export default userSlice.reducer
