import React from 'react';
import PropTypes from 'prop-types';
import ThumbnailToday from './ThumbnailToday/ThumbnailToday';

TodayWeather.propTypes = {};

function TodayWeather({ weatherData }) {
	return (
		<div>
			<ThumbnailToday weatherData={weatherData} />
			<div>
				<span className='material-icons'>place</span>
				{weatherData.data.title}
			</div>
		</div>
	);
}

export default TodayWeather;
