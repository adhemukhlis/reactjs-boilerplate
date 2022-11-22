import React, { Fragment } from "react";
import RouteService from "@/src/routes/RouteService";
// import ApiService from "@/src/services/client"/


/**
 * configurasi environment development dan production
 */
// const isDevMode = ['development'].includes(process.env.NODE_ENV)

// if (isDevMode) {
// 	require('./services/mock-adapter')
// }

// ApiService.interceptors.response.use(
// 	(response) => {
// 		const isInvalidToken = false
// 		if (isInvalidToken) {
// 			// do when token invalid
// 		}
// 		return Promise.resolve(response)
// 	},
// 	(error) => {
// 		console.error('interceptor * ', error.response)
// 		return Promise.reject(error)
// 	}
// )
// ApiService.interceptors.request.use(
// 	(config) => {
// 		return config
// 	},
// 	(error) => {
// 		console.error('interceptor * ', error.response)
// 		return Promise.reject(error)
// 	}
// )
const App = () => {
  return (
    <Fragment>
      <RouteService />
    </Fragment>
  );
};

export default App;
