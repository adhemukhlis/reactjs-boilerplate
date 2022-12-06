import set from 'lodash/fp/set'
import merge from 'lodash/fp/merge'
import get from 'lodash/fp/get'

const objectMerge = (state, name, value) =>
	set(name, Object.keys(value).length < 1 ? {} : merge(get(name, state), value), state)

export default objectMerge
