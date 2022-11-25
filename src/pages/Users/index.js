import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import ApiService from '@/src/services/clientBlog'
import URLS from '@/src/enums/urls'
import { Table, Button, Card } from 'antd'
import { Link } from 'react-router-dom'
import { queryString, queryStringStringify } from '@/src/utils/paramUtil'
import Container from '@/src/components/Container'

import './index.css'

const Users = () => {
	const navigate = useNavigate()
	const [users, setUsers] = useState({
		data: [],
		meta: {},
		loading: true
	})
	const [fetchLoading, setFetchLoading] = useState(true)
	const token = localStorage.getItem('token')
	const { data_amount, pagination, page } = users.meta

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
	const fetchUsers = (query) => {
		setUsers((prev) => ({
			...prev,
			loading: true
		}))
		ApiService.request({
			url: `/users/getall${query}`,
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then((res) => {
				setUsers((prev) => ({
					...prev,
					data: res.data.data,
					meta: res.data.meta,
					loading: false
				}))
			})
			.catch((err) => {
				setUsers((prev) => ({
					...prev,
					loading: false
				}))
			})
	}
	const handleTableChange = (newPagination) => {
		const newQuery = queryStringStringify({
			page: newPagination.current,
			pagination: newPagination.pageSize
		})
		navigate({
			pathname: URLS.PROFILE,
			search: newQuery
		})
		fetchUsers(newQuery)
		// navigate(0)
	}
	useEffect(() => {
		fetchUsers(queryString)
	}, [])

	return (
		<Container>
			<div style={{ padding: '2rem' }}>
				<Card title="Users Page">
					<Table
						rowClassName={(record, index) =>
							index % 2 === 0 ? 'table-row-light' : 'table-row-dark'
						}
						rowKey="id"
						loading={users.loading}
						columns={columns}
						dataSource={users.data}
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
				</Card>
			</div>
		</Container>
	)
}
export default Users
