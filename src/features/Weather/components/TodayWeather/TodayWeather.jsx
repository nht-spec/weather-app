import React from 'react';
import ThumbnailToday from './ThumbnailToday/ThumbnailToday';
import './style.scss';
import TheTempToday from './TheTempToday/TheTempToday';
import DateToday from './DateToday/DateToday';
TodayWeather.propTypes = {};

function TodayWeather({ weatherData }) {
	return (
		<div>
			<ThumbnailToday weatherData={weatherData} />
			<TheTempToday weatherData={weatherData} />
			<DateToday weatherData={weatherData} />
			<div className='place-control d-flex  f-family'>
				<span className='material-icons'>place</span>
				{weatherData.data.title}
			</div>
		</div>
	);
}

export default TodayWeather;
