import { get } from 'lodash'
const AUTH_GETTERS = {
	loginToken: (state) => get(state, 'Auth.login.data.token', ''),
	loginUserID: (state) => get(state, 'Auth.login.data.user_id', ''),
	loginRememberUsername: (state) => get(state, 'Auth.remember_me.username', ''),
}
export default AUTH_GETTERS
