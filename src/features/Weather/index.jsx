import React, { useEffect, useState } from 'react';
import SearchPlace from './components/SearchPlace/SearchPlace';
import TodayWeather from './components/TodayWeather/TodayWeather';
import useDefaultLocation from './hooks/useDefaultLocation';
import useGetCityDefault from './hooks/useGetCityDefault';
import useWeatherByWoeid from './hooks/useWeatherByWoeid';
import './style.scss';
import '../../index.scss';

function WeatherFeature() {
	const [woeid, setWoeid] = useState('');
	const { lattLong } = useDefaultLocation();
	const { cityDefault } = useGetCityDefault(lattLong);
	const [woeidSearch, setWoeidSearch] = useState('');
	const [isSearch, setIsSearch] = useState(false);

	useEffect(() => {
		cityDefault.data?.map((data, idx) => idx === 0 && setWoeid(data.woeid));
	}, [cityDefault]);

	const { weatherData, loading } = useWeatherByWoeid(
		woeidSearch ? woeidSearch : woeid
	);

	if (loading && !woeidSearch) {
		return <div>loading...</div>;
	}

	return (
		<div>
			<div className='content-one-control d-flex background-darkslategray'>
				<SearchPlace woeidsearch={setWoeidSearch} issearch={setIsSearch} />
				<TodayWeather weatherData={weatherData} />
			</div>
		</div>
	);
}

export default WeatherFeature;
