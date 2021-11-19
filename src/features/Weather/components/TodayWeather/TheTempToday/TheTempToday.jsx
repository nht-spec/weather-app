import React, { useEffect, useState } from 'react';
import '../../../../../index.scss';
import './style.scss';

TheTempToday.propTypes = {};

function TheTempToday({ weatherData, isChangeDegree }) {
	const [tempF, setTempF] = useState('');

	useEffect(() => {
		weatherData.data.consolidated_weather.forEach((data, idx) => {
			if (idx === 0) {
				const tempf = Math.trunc((data.the_temp * 9) / 5 + 32);
				setTempF(tempf);
			}
		});
	}, [weatherData]);

	return (
		<div>
			{weatherData.data.consolidated_weather.map(
				(data, idx) =>
					idx === 0 && (
						<div className='f-family' key={idx}>
							{!isChangeDegree && (
								<h2 className='temp-title-one d-flex c-lavender padding-bottom'>
									{Math.trunc(data.the_temp)}
									<p className='temp-title-two c-darkgray'>℃</p>
								</h2>
							)}
							{isChangeDegree && (
								<h2 className='temp-title-one d-flex c-lavender padding-bottom'>
									{tempF}
									<p className='temp-title-two c-darkgray'>℉</p>
								</h2>
							)}
							<h2 className='name-temp c-darkgray padding-bottom d-flex'>
								{data.weather_state_name}
							</h2>
						</div>
					)
			)}
		</div>
	);
}

export default TheTempToday;
