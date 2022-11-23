import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import ApiService from '@/src/services/clientBlog'
import URLS from '@/src/enums/urls'
import { Table, Button, Card } from 'antd'
import './index.css'
import { Link } from 'react-router-dom'
import { queryString, queryStringStringify } from '@/src/utils/paramUtil'
import asyncLocalStorage from '@/src/utils/asyncLocalStorage'
const Profile = () => {
	const navigate = useNavigate()
	const [user, setUser] = useState({
		name: '',
		data: [],
		meta: {}
	})
	const [logoutLoading, setLogoutLoading] = useState(false)

	const token = localStorage.getItem('token')
	const { data_amount, pagination, page } = user.meta
	const authLogout = () => {
		setLogoutLoading(true)
		asyncLocalStorage.setItem('token', '').then(() => {
			setLogoutLoading(false)
			navigate(URLS.AUTH)
		})
	}

	const columns = [
		{
			title: 'No',
			dataIndex: 'no',
			render: (value, data, i) => (page - 1) * pagination + i + 1
		},
		{
			title: 'ID',
			dataIndex: 'id'
		},
		{
			title: 'Username',
			dataIndex: 'username',
			render: (value, data) => <Link to={`${URLS.PROFILE}/${value}`}>{value}</Link>
		}
	]
	const fetchUserData = () => {
		ApiService.request({
			url: '/users',
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then((res) => {
			setUser((prev) => ({ ...prev, name: res.data.name }))
		})
	}
	const fetchUsers = (query) => {
		ApiService.request({
			url: `/users/getall${query}`,
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then((res) => {
			setUser((prev) => ({
				...prev,
				data: res.data.data,
				meta: res.data.meta
			}))
		})
	}
	const handleTableChange = (newPagination) => {
		navigate({
			pathname: URLS.PROFILE,
			search: queryStringStringify({
				page: newPagination.current,
				pagination: newPagination.pageSize
			})
		})
		navigate(0)
	}
	useEffect(() => {
		fetchUserData()
		fetchUsers(queryString)
	}, [])

	return (
		<div>
			<Card title="Profile Page">
				<Table
					rowClassName={(record, index) =>
						index % 2 === 0 ? 'table-row-light' : 'table-row-dark'
					}
					rowKey="id"
					columns={columns}
					dataSource={user.data}
					pagination={{
						showSizeChanger: true,
						pageSizeOptions: [5, 10, 50],
						total: data_amount,
						pageSize: pagination,
						current: page
					}}
					onChange={handleTableChange}
				/>
				<Button
					shape="round"
					size="large"
					style={{
						background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)'
					}}
					type="primary">
					Data Penduduk
				</Button>
				<Button
					loading={logoutLoading}
					shape="round"
					size="large"
					style={{
						background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)'
					}}
					type="primary"
					onClick={authLogout}>
					Logout
				</Button>
			</Card>
		</div>
	)
}
export default Profile
