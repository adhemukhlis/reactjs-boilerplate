import API_URLS from '@/src/enums/api-urls'
import ApiService from '@/src/services/clientBlog'
import ACTION_TYPES from '@/src/store/types/action-types'
import REDUCER_TYPES from '@/src/store/types/reducer-types'
import { get } from 'lodash'
import AUTH_GETTERS from './getters'

const AUTH_ACTIONS = {
	[ACTION_TYPES.POST_AUTH_LOGIN]({ username, password }) {
		return async (dispatch, state) => {
			return await ApiService.request({
				url: API_URLS.AUTH_LOGIN,
				method: 'POST',
				data: {
					username,
					password
				}
			})
				.then((response) => {
					const data = get(response, 'data.data', [])
					const statusCode = get(response, 'data.statusCode', null)
					const message = get(response, 'data.message', 'undefined message')
					dispatch({ type: REDUCER_TYPES.AUTH_LOGIN, data, statusCode, message })
					return response
				})
				.catch((error) => {
					throw error
				})
		}
	},
	[ACTION_TYPES.POST_AUTH_LOGOUT]() {
		return async (dispatch, state) => {
			const token = AUTH_GETTERS.loginToken(state())
			return await ApiService.request({
				url: API_URLS.AUTH_LOGOUT,
				method: 'get',
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
				.then((response) => {
					dispatch({ type: REDUCER_TYPES.AUTH_LOGOUT })
					return response
				})
				.catch((error) => {
					throw error
				})
		}
	}
}
export default AUTH_ACTIONS
