import createReducer from '@/src/store/createReducer'
import REDUCER_TYPES from '@/src/store/types/reducer-types'
import set from 'lodash/fp/set'
import objectMerge from '@/src/store/utils/objectMerge'

const initialState = {}

export default createReducer(initialState, {
	[REDUCER_TYPES.AUTH_LOGIN](state, { type, ...payload }) {
		return objectMerge(state, 'login', payload)
	},
	[REDUCER_TYPES.AUTH_LOGOUT](state, { type }) {
		return set(state, 'login.data', {})
	}
})
