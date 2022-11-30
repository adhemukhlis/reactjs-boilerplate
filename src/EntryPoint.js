import { Suspense } from 'react'
import App from '@/src/App'
import Spinner from './components/loader3'
// require("./services/mock-adapter");

const Loader = () => {
	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}>
			<Spinner />
		</div>
	)
}
const EntryPoint = () => {
	return (
		<Suspense fallback={<Loader />}>
			<App />
		</Suspense>
	)
}

export default EntryPoint
