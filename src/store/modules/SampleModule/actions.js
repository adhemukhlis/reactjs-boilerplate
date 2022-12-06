/* 

import ACTION_TYPES from 'src/store/types/action-types'
import REDUCER_TYPES from 'src/store/types/reducer-types'

export default {
	[ACTION_TYPES._FETCH_TEMPLATE]() {
		return async (dispatch, state) => {
			const token = 'token'
			const response = await ApiService.get(API_URLS._TEMPLATE, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			}).then((response) => response)
			dispatch({ type: REDUCER_TYPES._TEMPLATE, someValue: response })
		}
	}
}

*/
