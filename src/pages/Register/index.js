import API_URLS from '@/src/enums/api-urls'
import ApiService from '@/src/services/clientBlog'
import { Button, Form, Input, message } from 'antd'
import { useState } from 'react'

const { useForm } = Form
const Register = () => {
	const [load, setLoad] = useState(false)
	const [form] = useForm()
	const onFinish = (values) => {
		setLoad(true)
		const { name, username, password } = form.getFieldsValue()
		ApiService.request({
			method: 'post',
			url: API_URLS.AUTH_REGISTER,
			data: {
				name,
				username,
				password
			}
		})
			.then((res) => {
				message.success(res.data.message)
			})
			.catch((err) => {
				console.log(err)
				if ([400].includes(err.response.status)) {
					message.error(
						<ul>
							{err.response.data.message.map(({ param, msg }, i) => (
								<li key={i}>{msg}</li>
							))}
						</ul>
					)
				} else {
					message.error(err.response.data.message)
				}
			})
			.finally(() => {
				setLoad(false)
			})
	}

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<Form
			form={form}
			name="basic"
			labelCol={{
				sm: {
					span: 6
				}
			}}
			wrapperCol={{
				sm: {
					span: 18
				}
			}}
			initialValues={{
				remember: true
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off">
			<Form.Item
				label="Name"
				name="name"
				rules={[
					{
						required: true,
						message: 'Please input your name!'
					}
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				label="Username"
				name="username"
				rules={[
					{
						required: true,
						message: 'Please input your username!'
					}
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				label="Password"
				name="password"
				rules={[
					{
						required: true,
						message: 'Please input your password!'
					}
				]}>
				<Input.Password />
			</Form.Item>
			<Form.Item
				wrapperCol={{
					sm: {
						offset: 6,
						span: 18
					}
				}}>
				<Button
					shape="round"
					size="large"
					style={{
						background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)'
					}}
					loading={load}
					type="primary"
					htmlType="submit">
					Daftar
				</Button>
			</Form.Item>
		</Form>
	)
}

export default Register
