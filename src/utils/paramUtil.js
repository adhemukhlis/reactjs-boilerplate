import qs from 'qs'
const url = window.location.href
export const queryString = url.indexOf('?') !== -1 ? url.slice(url.indexOf('?')) : ''
export const queryStringParser = (urlParam = queryString) => {
	const query = urlParam.slice(urlParam.indexOf('?'))
	return qs.parse(query, {
		ignoreQueryPrefix: true
	})
}

export const queryStringStringify = (obj) =>
	qs.stringify(obj, {
		addQueryPrefix: true
	})
