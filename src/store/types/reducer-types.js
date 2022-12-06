/**
 * enumerasi penamaan REDUCER
 * name dan value harus UPPER_CASE
 * format nama reducer [MODULE_NAME]_[REDUCER_NAME]
 * terpisah berdasarkan modul reducers.js menggunakan double slash
 * @var {object}
 */
const REDUCER_TYPES = {
	// root
	ROOT_STATE_RESET: 'ROOT_STATE_RESET',

	// Auth
	AUTH_LOGIN: 'AUTH_LOGIN',
	AUTH_LOGOUT: 'AUTH_LOGOUT',

	// Users
	USERS_ID: 'USERS_ID',
	USERS_CHANGE_AVATAR: 'USERS_CHANGE_AVATAR'
}

export default REDUCER_TYPES
