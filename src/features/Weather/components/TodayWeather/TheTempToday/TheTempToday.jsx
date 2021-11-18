import React from 'react';
import '../../../../../index.scss';
import './style.scss';

TheTempToday.propTypes = {};

function TheTempToday({ weatherData }) {
	return (
		<div>
			{weatherData.data.consolidated_weather.map(
				(data, idx) =>
					idx === 0 && (
						<div className='f-family' key={idx}>
							<h2 className='temp-title-one d-flex c-lavender padding-bottom'>
								{Math.trunc(data.the_temp)}{' '}
								<p className='temp-title-two c-darkgray'>℃</p>
							</h2>
							<h2 className='name-temp c-darkgray padding-bottom'>
								{data.weather_state_name}
							</h2>
						</div>
					)
			)}
		</div>
	);
}

export default TheTempToday;
