import { Card, Col, Row, Button } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import URLS from '@/src/enums/urls'
const Home = () => {
	return (
		<div style={{ display: 'flex', minHeight: '100vh', minWidth: '100vw' }}>
			<Row justify="center" align="middle" style={{ flex: 1 }}>
				<Col span={8}>
					<Card
						title="Website Aja"
						actions={[
							<Link to={URLS.AUTH}>
								<Button type="primary" shape="round" size="large">
									Register Now <RightOutlined />
								</Button>
							</Link>
						]}>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
						Ipsum has been the industry's standard dummy text ever since the 1500s, when an
						unknown printer took a galley of type and scrambled it to make a type specimen book.
						It has survived not only five centuries, but also the leap into electronic
						typesetting, remaining essentially unchanged. It was popularised in the 1960s with
						the release of Letraset sheets containing Lorem Ipsum passages, and more recently
						with desktop publishing software like Aldus PageMaker including versions of Lorem
						Ipsum.
					</Card>
				</Col>
			</Row>
		</div>
	)
}
export default Home
