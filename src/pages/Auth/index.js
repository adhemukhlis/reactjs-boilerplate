import { Tabs, Row, Col, Card } from 'antd'
import React from 'react'
import Login from '../Login'
import Register from '../Register'
const Auth = () => {
	const items = [
		{ label: 'Register', key: 'item-1', children: <Register /> },
		{ label: 'Login', key: 'item-2', children: <Login /> }
	]
	return (
		<Row justify={'center'} align="middle" style={{ minHeight: '100vh' }}>
			<Col {...{ sm: 22, md: 16, lg: 10 }}>
				<Card>
					<Tabs items={items} defaultActiveKey="1" />
				</Card>
			</Col>
		</Row>
	)
}
export default Auth
