import React from 'react';
import Humidity from './Humidity/Humidity';
import WindStatus from './WindStatus/WindStatus';
import Visibility from './Visibility/Visibility';
import AirPressure from './AirPressure/AirPressure';
import './style.scss';

function TodayHightlight({ weatherData }) {
	console.log(weatherData);
	return (
		<div className='c-lavender f-family today-hightlight-control'>
			<h2 className='today-hight-title'>Today’s Hightlights </h2>
			{weatherData.data.consolidated_weather.map(
				(data, idx) =>
					idx === 0 && (
						<div className='d-flex today-hightlight-list' key={data.id}>
							<WindStatus
								wind={data.wind_speed}
								compass={data.wind_direction_compass}
							/>
							<Humidity humidity={data.humidity} />
							<Visibility visibility={data.visibility} />
							<AirPressure airpressure={data.air_pressure} />
						</div>
					)
			)}
		</div>
	);
}

export default TodayHightlight;
