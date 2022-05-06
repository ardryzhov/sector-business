import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
	name: 'users',
	initialState: {
		users: [],
		filtredUsers: [],
		currentPage: 1,
		userPerPage: 10,
		totalPage: [],
		filtredPage: [],
		loading: false,
	},
	reducers: {
		getUsersFetch(state) {
			state.loading = true
		},
		getUsersSuccess(state, action) {
			state.loading = false
			state.users = [...action.payload]

			if (state.totalPage.length === 0) {
				for (
					let i = 1;
					i <= Math.ceil(action.payload.length / state.userPerPage);
					i++
				) {
					state.totalPage.push(i)
				}
			}
		},
		changePage(state, action) {
			const page = action.payload

			if (state.filtredPage.length) {
				if (
					+page === 0 ||
					(+page > state.filtredPage.length && state.filtredPage.length)
				)
					return
			}
			if (
				+page === 0 ||
				(+page > state.totalPage.length && state.totalPage.length)
			)
				return
			state.currentPage = page
		},
		filterUsers(state, action) {
			state.filtredUsers = [...action.payload]
			state.filtredPage = []
			if (state.filtredPage.length === 0) {
				for (
					let i = 1;
					i <= Math.ceil(action.payload.length / state.userPerPage);
					i++
				) {
					state.filtredPage.push(i)
				}
			}
		},
		sortUsers(state, action) {
			const tag = action.payload.tag
			function sortByTag(field) {
				return (a, b) => (a[field] > b[field] ? 1 : -1)
			}

			if (state.filtredUsers.length) {
				state.filtredUsers = state.filtredUsers.sort(sortByTag(tag))
			}

			state.users = state.users.sort(sortByTag(tag))
			state.currentPage = 1
		},
		searchInput(state, action) {
			state.users = state.users.filter((val) => {
				const title = val.title.toLowerCase()
				const body = val.body.toLowerCase()
				const req = action.payload.req.toLowerCase()

				if (title.includes(req) || body.includes(req)) {
					return val
				}
			})
		},
	},
})

export const {
	getUsersFetch,
	getUsersSuccess,
	changePage,
	filterUsers,
	sortUsers,
	searchInput,
} = userSlice.actions
export default userSlice.reducer
