import React from 'react';
import DateFiveDay from './DateFiveDay/DateFiveDay';
import MaxMinTemp from './MaxMinTemp/MaxMinTemp';
import ThumbnailFiveDay from './ThumbnailFiveDay/ThumbnailFiveDay';
import './style.scss';

function NextFiveDayWeather({ weatherData }) {
	console.log(weatherData);
	return (
		<div className='d-flex next-five-day-control'>
			{weatherData.data.consolidated_weather.map(
				(data, idx) =>
					idx !== 0 && (
						<div className='weather-five-day-list f-family ' key={data.id}>
							<div className='date-control d-flex c-lavender'>
								{(idx === 1 && 'Tomorrow') || (
									<DateFiveDay time={data.applicable_date} />
								)}
							</div>

							<ThumbnailFiveDay thumbnail={data.weather_state_abbr} />
							<MaxMinTemp maxTemp={data.max_temp} minTemp={data.min_temp} />
						</div>
					)
			)}
		</div>
	);
}

export default NextFiveDayWeather;
