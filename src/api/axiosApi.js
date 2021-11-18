import axios from 'axios';

const axiosApi = axios.create({
	baseURL:
		'https://the-ultimate-api-challenge.herokuapp.com/https://www.metaweather.com/',
	headers: {
		'Content-Type': 'application/json',
	},
});
export default axiosApi;
