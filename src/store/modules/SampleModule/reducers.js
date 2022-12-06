/* 

import createReducer from '@/src/store/createReducer'
import REDUCER_TYPES from '@/src/store/types/reducer-types'

const initialState = {
	someState: '',
	otherState: ''
}

export default createReducer(initialState, {
	[REDUCER_TYPES.TEMPLATE](state, action) {
		return {
			...state,
			someState: action.someValue
		}
	}
}) 

*/
