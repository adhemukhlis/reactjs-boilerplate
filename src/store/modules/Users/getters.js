import { get } from 'lodash'
const USERS_GETTERS = {
	getUsersProfile: (state) =>
		get(state, 'Users.profile.data', { username: '', avatar: '', name: '' })
}
export default USERS_GETTERS
