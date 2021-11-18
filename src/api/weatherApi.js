import axiosApi from './axiosApi';

const weatherApi = {
	getLocation(params) {
		const url = '/api/location/search/';
		return axiosApi.get(url, { params });
	},

	getWeather(woeid) {
		const url = `/api/location/${woeid}`;
		return axiosApi.get(url);
	},
};

export default weatherApi;
