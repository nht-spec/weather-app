import { useEffect, useState } from 'react';
import weatherApi from '../../../api/weatherApi';

export default function useWeatherByWoeid(woeid) {
	const [weatherData, setWeatherData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		woeid &&
			(async () => {
				setLoading(true);
				const result = await weatherApi.getWeather(woeid);
				setWeatherData(result);
				setLoading(false);
			})();
	}, [woeid]);

	return {
		weatherData,
		loading,
	};
}
