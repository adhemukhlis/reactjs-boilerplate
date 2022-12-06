import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'
import rootReducers from './reducers'

const isDevMode = ['development'].includes(process.env.NODE_ENV)

const persistWhitelist = ['Auth']

const config = {
	key: 'root',
	storage: storage,
	whitelist: persistWhitelist,
	debug: isDevMode,
	transforms: [
		encryptTransform({
			secretKey: process.env.REACT_APP_REDUX_PERSIST_SECRET_KEY,
			onError: (error) => {
				console.error(error)
			}
		})
	]
}

// middleware redux yang digunakan
// const middleware = []

// middleware.push(thunkMiddleware)

const enhancers = [
	// applyMiddleware(...middleware)
]

// persist config
const persistConfig = {
	enhancers
}

const reducers = persistCombineReducers(config, rootReducers)

const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false
		})
})

const persistor = persistStore(store, persistConfig)

const storeService = () => {
	return { store, persistor }
}

export default storeService
