const asyncLocalStorage = {
	setItem: (key, value) => {
		return Promise.resolve().then(() => {
			localStorage.setItem(key, value)
		})
	},
	getItem: (key) => {
		return Promise.resolve().then(() => {
			return localStorage.getItem(key)
		})
	}
}
export default asyncLocalStorage
