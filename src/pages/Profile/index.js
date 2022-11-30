import React, { useEffect, useState } from 'react'
import ApiService from '@/src/services/clientBlog'
import { Card, Row, Col, Descriptions } from 'antd'
import Container from '@/src/components/Container'
import moment from 'moment'
import UploadProfile from '@/src/components/UploadImageProfile'

const Profile = () => {
	const [profile, setProfile] = useState({
		data: {
			name: '',
			username: '',
			avatar: '',
			createdAt: ''
		},
		loading: true
	})
	const token = localStorage.getItem('token')

	const fetchProfile = () => {
		const user_id = localStorage.getItem('user_id') || ''
		setProfile((prev) => ({
			...prev,
			loading: true
		}))
		ApiService.request({
			url: `/users/id/${user_id}`,
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then((res) => {
				setProfile((prev) => ({
					...prev,
					data: res.data.data,
					loading: false
				}))
			})
			.catch((err) => {
				setProfile((prev) => ({
					...prev,
					loading: false
				}))
			})
	}
	const handleUpload = (file) => {
		if (file !== undefined) {
			setProfile((prev) => ({
				...prev,
				data: {
					...prev.data,
					avatar: ''
				},
				loading: true
			}))
			const body = {
				avatar: file
			}
			ApiService.request({
				method: 'POST',
				url: '/users/change-avatar',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'multipart/form-data'
				},
				data: body
			})
				.then((response) => {
					setProfile((prev) => ({
						...prev,
						data: {
							...prev.data,
							avatar: response.data.data.avatar
						},
						loading: false
					}))
					return response.data.data.avatar
				})
				.catch((error) => {
					throw error
				})
		}
	}
	useEffect(() => {
		fetchProfile()
	}, [])

	return (
		<Container>
			<div style={{ padding: '2rem' }}>
				<Card title="Profile Page">
					<Row>
						<Col span={8}>
							<UploadProfile onReadyUpload={handleUpload} imageUrl={profile.data.avatar} />
						</Col>
						<Col span={16}>
							<Descriptions
								title="User Info"
								column={{ xxl: 3, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}>
								<Descriptions.Item label="Name">{profile.data.name}</Descriptions.Item>
								<Descriptions.Item label="UserName">{profile.data.username}</Descriptions.Item>
								<Descriptions.Item label="Join Date">
									{moment(profile.data.createdAt).format('DD MMM YYYY')}
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
