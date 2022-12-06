import React, { Fragment } from 'react'
import RouteService from '@/src/routes/RouteService'
import ApiService from './services/clientBlog'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import AUTH_ACTIONS from './store/modules/Auth/actions'
import ACTION_TYPES from './store/types/action-types'

const App = () => {
	const dispatch = useDispatch()
	const authLogout = () => dispatch(AUTH_ACTIONS[ACTION_TYPES.POST_AUTH_LOGOUT]())

	ApiService.interceptors.response.use(
		(response) => {
			const isInvalidToken = false
			if (isInvalidToken) {
				// do when token invalid
			}
			return Promise.resolve(response)
		},
		(error) => {
			console.error('interceptor * ', error.response.data.statusCode)
			if ([401, 400].includes(error.response.data.statusCode)) {
				authLogout()
				message.error('token expired')
			}
			return Promise.reject(error)
		}
	)
	return (
		<Fragment>
			<RouteService />
		</Fragment>
	)
}

export default App
