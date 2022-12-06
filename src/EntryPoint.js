import { Suspense } from 'react'
import App from '@/src/App'
import Spinner from './components/loader3'
import { Provider } from 'react-redux'
import configureStore from '@/src/store'
import { PersistGate } from 'redux-persist/integration/react'
// require("./services/mock-adapter");
const { store, persistor } = configureStore()
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
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<App />
				</PersistGate>
			</Provider>
		</Suspense>
	)
}

export default EntryPoint
