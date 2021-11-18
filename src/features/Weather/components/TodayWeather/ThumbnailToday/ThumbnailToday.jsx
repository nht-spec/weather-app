import React from 'react';
import './style.scss';

const URL_IMAGE = 'https://www.metaweather.com/static/img/weather/png/';

function ThumbnailToday({ weatherData }) {
	return (
		<div className='thumbnail-control padding-bottom'>
			{weatherData.data.consolidated_weather.map(
				(data, idx) =>
					idx === 0 && (
						<img
							className='thumbnail'
							key={idx}
							src={`${URL_IMAGE}${data.weather_state_abbr}.png`}
							alt=''
						/>
					)
			)}
		</div>
	);
}

export default ThumbnailToday;
