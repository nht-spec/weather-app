import React from 'react';
import ThumbnailToday from './ThumbnailToday/ThumbnailToday';
import '../../../../index.scss';
import TheTempToday from './TheTempToday/TheTempToday';
TodayWeather.propTypes = {};

function TodayWeather({ weatherData }) {
	return (
		<div>
			<ThumbnailToday weatherData={weatherData} />
			<TheTempToday weatherData={weatherData} />
			<div className='place-control d-flex'>
				<span className='material-icons'>place</span>
				{weatherData.data.title}
			</div>
		</div>
	);
}

export default TodayWeather;
