import { Layout } from 'antd'
import Footer from '@/src/components/Footer'
import Header from '@/src/components/Header'
const { Content } = Layout

const Wrapper = ({ children, footerContainer = <Footer />, headerContainer = <Header /> }) => {
	return (
		<Layout style={{ minHeight: '100vh' }}>
			{headerContainer}
			<Content style={{ padding: '0 0', display: 'flex', flexDirection: 'column' }}>{children}</Content>
			{footerContainer}
		</Layout>
	)
}

export default Wrapper
