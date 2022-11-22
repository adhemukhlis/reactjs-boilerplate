import React from 'react'

const Loader = () => {
	return <div style={styles.container}>Loading...</div>
}

const styles = {
	container: {
		height: '100vh',
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
}
export default Loader
