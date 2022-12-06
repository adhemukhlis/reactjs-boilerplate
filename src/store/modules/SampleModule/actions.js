// import API_URLS from '@/src/enums/api-urls'
// import ApiService from '@/src/services/client'
// import ACTION_TYPES from '@/src/store/types/action-types'
// import REDUCER_TYPES from '@/src/store/types/reducer-types'
// import { get } from 'lodash'
// import AUTH_GETTERS from '../Auth/getters'

// const SAMPLE_ACTIONS = {
// 	[ACTION_TYPES.GET_USERS]() {
// 		return async (dispatch, state) => {
// 			const token = AUTH_GETTERS.loginToken(state())
// 			return await ApiService.request({
// 				url: API_URLS.USERS,
// 				method: 'GET',
// 				headers: {
// 					Authorization: `Bearer ${token}`
// 				}
// 			})
// 				.then((response) => {
// 					const data = get(response, 'data.data', {})
// 					dispatch({ type: REDUCER_TYPES.USERS, data })
// 					return response
// 				})
// 				.catch((error) => {
// 					throw error
// 				})
// 		}
// 	},
// 	[ACTION_TYPES.POST_USERS_CHANGE_AVATAR]({ file }) {
// 		const body = {
// 			avatar: file
// 		}
// 		return async (dispatch, state) => {
// 			const token = AUTH_GETTERS.loginToken(state())
// 			return await ApiService.request({
// 				url: API_URLS.USER_CHANGE_AVATAR,
// 				method: 'post',
// 				headers: {
// 					Authorization: 'Bearer ' + token,
// 					'Content-Type': 'multipart/form-data'
// 				},
// 				data: body
// 			})
// 				.then((response) => {
// 					const avatar = get(response, 'data.data.avatar', '')
// 					dispatch({ type: REDUCER_TYPES.USER_CHANGE_AVATAR, avatar })
// 					return response
// 				})
// 				.catch((error) => {
// 					throw error
// 				})
// 		}
// 	}
// }
// export default SAMPLE_ACTIONS
