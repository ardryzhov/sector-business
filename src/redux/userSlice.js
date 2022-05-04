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
	},
})

export const { getUsersFetch, getUsersSuccess, getUsersFailure } =
	userSlice.actions
export default userSlice.reducer
