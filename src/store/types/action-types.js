/**
 * enumerasi penamaan ACTION
 * name dan value harus UPPER_CASE
 * terpisah berdasarkan modul actions.js menggunakan double slash
 * @var {object}
 */
const ACTION_TYPES = {
	// root
	// reset redux state
	ROOT_STATE_RESET: 'ROOT_STATE_RESET',

	// Auth
	POST_AUTH_LOGIN: 'POST_AUTH_LOGIN',
	POST_AUTH_LOGOUT: 'POST_AUTH_LOGOUT',

	// Users
	GET_USERS_ID: 'GET_USERS_ID',
	POST_USERS_CHANGE_AVATAR: 'POST_USERS_CHANGE_AVATAR'
}

export default ACTION_TYPES
