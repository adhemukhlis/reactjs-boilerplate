import { get } from 'lodash'
const AUTH_GETTERS = {
	loginToken: (state) => get(state, 'Auth.login.data.token', ''),
	loginUserID: (state) => get(state, 'Auth.login.data.user_id', '')
}
export default AUTH_GETTERS
