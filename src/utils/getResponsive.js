const getResponsive = (val) => {
	const f_height = val * (window.innerWidth / window.innerHeight)
	const f_width = val * (window.innerHeight / window.innerWidth)
	const f_avg_scale =
		(window.innerWidth / window.innerHeight + window.innerHeight / window.innerWidth) / 2
	return `calc( ${f_width * f_avg_scale}vh + ${f_height * f_avg_scale}vw)`
}

export default getResponsive
