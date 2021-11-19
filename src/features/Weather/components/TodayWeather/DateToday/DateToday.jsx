import React, { useEffect, useState } from 'react';
import './style.scss';

function DateToday({ weatherData }) {
	const [time, setTime] = useState('');

	useEffect(() => {
		weatherData.data.consolidated_weather.forEach((data, idx) => {
			if (idx === 0) {
				const date = new Date(data.applicable_date);
				const day = date
					.toLocaleDateString('en-US', { weekday: 'long' })
					.slice(0, 3);
				const month = date
					.toLocaleDateString('en-US', { month: 'long' })
					.slice(0, 3);
				const dayNumber = date.getDate();

				setTime(`${day}, ${dayNumber} ${month}`);
			}
		});
	}, [weatherData]);

	return (
		<div className='d-flex time-control '>
			<p>Today</p>
			<p>•</p>
			<p>{time}</p>
		</div>
	);
}

export default DateToday;
