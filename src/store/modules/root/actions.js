import ACTION_TYPES from '@/src/store/types/action-types'
import REDUCER_TYPES from '@/src/store/types/reducer-types'

export default {
	[ACTION_TYPES.ROOT_STATE_RESET]() {
		return {
			type: REDUCER_TYPES.ROOT_STATE_RESET
		}
	}
}
