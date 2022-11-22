import React from 'react'
import { useParams } from 'react-router-dom'
const DetailDataPenduduk = () => {
	const { username } = useParams()

	return <div>{username}</div>
}
export default DetailDataPenduduk
