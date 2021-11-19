import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ChangeDegree from './components/ChangeDegree/ChangeDegree';
import NextFiveDayWeather from './components/NextFiveDayWeather/NextFiveDayWeather';
import SearchPlace from './components/SearchPlace/SearchPlace';
import TodayHightlight from './components/TodayHightlight/TodayHightlight';
import TodayWeather from './components/TodayWeather/TodayWeather';
import useDefaultLocation from './hooks/useDefaultLocation';
import useGetCityDefault from './hooks/useGetCityDefault';
import useWeatherByWoeid from './hooks/useWeatherByWoeid';
import './style.scss';

function WeatherFeature() {
	const [woeid, setWoeid] = useState('');
	const { lattLong } = useDefaultLocation();
	const { cityDefault } = useGetCityDefault(lattLong);
	const [woeidSearch, setWoeidSearch] = useState('');
	const [isBackDefault, setIsBackDefault] = useState(false);
	const [isChangeDegree, setIsChangeDegree] = useState(false);

	useEffect(() => {
		cityDefault.data?.map((data, idx) => idx === 0 && setWoeid(data.woeid));
	}, [cityDefault]);

	useEffect(() => {
		isBackDefault && setWoeidSearch('');
	}, [isBackDefault]);

	const { weatherData, loading } = useWeatherByWoeid(
		woeidSearch ? woeidSearch : woeid
	);

	if (loading && !woeidSearch && !isBackDefault) {
		return (
			<div className='loading-control'>
				<div className='loading'>
					<CircularProgress />
					<h3 className='loading-title c-lavender'>Loading...</h3>
				</div>
			</div>
		);
	}

	return (
		<div className=' content-control'>
			<div className='content-one-control d-flex background-darkslategray'>
				<SearchPlace
					isbackdefault={setIsBackDefault}
					woeidsearch={setWoeidSearch}
				/>

				<TodayWeather
					isChangeDegree={isChangeDegree}
					weatherData={weatherData}
				/>
			</div>
			<div className='content-two-control'>
				<ChangeDegree ischangedegree={setIsChangeDegree} />
				<NextFiveDayWeather
					isChangeDegree={isChangeDegree}
					weatherData={weatherData}
				/>
				<TodayHightlight weatherData={weatherData} />
			</div>
		</div>
	);
}

export default WeatherFeature;
