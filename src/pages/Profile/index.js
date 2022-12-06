import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Descriptions } from 'antd'
import Container from '@/src/components/Container'
import moment from 'moment'
import UploadProfile from '@/src/components/UploadImageProfile'
import AUTH_GETTERS from '@/src/store/modules/Auth/getters'
import { useDispatch, useSelector, useStore } from 'react-redux'
import USERS_ACTIONS from '@/src/store/modules/Users/actions'
import ACTION_TYPES from '@/src/store/types/action-types'
import USERS_GETTERS from '@/src/store/modules/Users/getters'

const Profile = () => {
	const dispatch = useDispatch()
	const dataProfile = useSelector(USERS_GETTERS.getUsersProfile)
	const store = useStore()
	const [profile, setProfile] = useState({
		data: {
			name: '',
			username: '',
			avatar: '',
			createdAt: ''
		},
		loading: true
	})

	const getUsersById = () => dispatch(USERS_ACTIONS[ACTION_TYPES.GET_USERS_ID]())
	const postUsersChangeAvatar = (file) => dispatch(USERS_ACTIONS[ACTION_TYPES.POST_USERS_CHANGE_AVATAR]({file}))

	const handleUpload = (file) => {
		const token = AUTH_GETTERS.loginToken(store.getState())
		if (file !== undefined) {
			
			postUsersChangeAvatar(file)
		}
	}
	useEffect(() => {
		getUsersById()
	}, [])

	return (
		<Container>
			<div style={{ padding: '2rem' }}>
				{JSON.stringify(dataProfile)}
				<Card title="Profile Page">
					<Row>
						<Col span={8}>
							<UploadProfile onReadyUpload={handleUpload} imageUrl={dataProfile.avatar} />
						</Col>
						<Col span={16}>
							<Descriptions
								title="User Info"
								column={{ xxl: 3, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}>
								<Descriptions.Item label="Name">{dataProfile.name}</Descriptions.Item>
								<Descriptions.Item label="UserName">{dataProfile.username}</Descriptions.Item>
								<Descriptions.Item label="Join Date">
									{moment(dataProfile.createdAt).format('DD MMM YYYY')}
								</Descriptions.Item>
							</Descriptions>
						</Col>
					</Row>
				</Card>
			</div>
		</Container>
	)
}
export default Profile
