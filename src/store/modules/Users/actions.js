import API_URLS from '@/src/enums/api-urls'
import ApiService from '@/src/services/clientBlog'
import ACTION_TYPES from '@/src/store/types/action-types'
import REDUCER_TYPES from '@/src/store/types/reducer-types'
import { get } from 'lodash'
import AUTH_GETTERS from '../Auth/getters'

const USERS_ACTIONS = {
	[ACTION_TYPES.GET_USERS_ID]() {
		return async (dispatch, state) => {
			const token = AUTH_GETTERS.loginToken(state())
			const user_id = AUTH_GETTERS.loginUserID(state())
			return await ApiService.request({
				url: `${API_URLS.USERS_ID}/${user_id}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
				.then((response) => {
					const data = get(response, 'data.data', {})
					dispatch({ type: REDUCER_TYPES.USERS_ID, data })
					return response
				})
				.catch((error) => {
					throw error
				})
		}
	},
	[ACTION_TYPES.POST_USERS_CHANGE_AVATAR]({ file }) {
		const body = {
			avatar: file
		}
		return async (dispatch, state) => {
			const token = AUTH_GETTERS.loginToken(state())
			return await ApiService.request({
				url: API_URLS.USERS_CHANGE_AVATAR,
				method: 'post',
				headers: {
					Authorization: 'Bearer ' + token,
					'Content-Type': 'multipart/form-data'
				},
				data: body
			})
				.then((response) => {
					const avatar = get(response, 'data.data.avatar', '')
					dispatch({ type: REDUCER_TYPES.USERS_CHANGE_AVATAR, avatar })
					return response
				})
				.catch((error) => {
					throw error
				})
		}
	}
}
export default USERS_ACTIONS
