import createReducer from '@/src/store/createReducer'
import REDUCER_TYPES from '@/src/store/types/reducer-types'
import set from 'lodash/fp/set'
import objectMerge from '@/src/store/utils/objectMerge'

const initialState = {}

export default createReducer(initialState, {
	[REDUCER_TYPES.USERS_ID](state, { type, ...payload }) {
		return objectMerge(state, 'profile', payload)
	},
	[REDUCER_TYPES.USERS_CHANGE_AVATAR](state, { type, avatar }) {
		return objectMerge(state, 'profile.data.avatar', avatar )
	}
})
