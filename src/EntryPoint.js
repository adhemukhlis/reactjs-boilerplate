import { Suspense } from 'react'
// import { Provider } from 'react-redux'

// import configureStore from '@/src/store'
// import { PersistGate } from 'redux-persist/integration/react'
import App from '@/src/App'
// import Loader from '@/src/components/Loader'
import Spinner from './components/loader3'
// import releaseVersion from '@/src/release_version.json'

// window.getBuildInfo = () => {
// 	console.table(releaseVersion)
// }

// const { store, persistor } = configureStore()
const Loader = () => {
	return (
		<div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
					<Spinner/>
				</div>
	)
}
const EntryPoint = () => {
	return (
		<Suspense fallback={<Loader />}>
			{/* <Provider store={store}> */}
				{/* <PersistGate persistor={persistor}> */}
					<App />
				{/* </PersistGate> */}
			{/* </Provider> */}
		</Suspense>
	)
}

export default EntryPoint
