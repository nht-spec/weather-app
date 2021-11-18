import React from 'react';

const URL_IMAGE = 'https://www.metaweather.com/static/img/weather/png/';

function ThumbnailToday({ weatherData }) {
	return (
		<div>
			{weatherData.data.consolidated_weather.map(
				(data, idx) =>
					idx === 0 && (
						<img
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
