import React, { useEffect, useState } from 'react';
import './style.scss';

function DateFiveDay({ time }) {
	const [date, setDate] = useState([]);

	useEffect(() => {
		const date = new Date(time);
		const day = date
			.toLocaleDateString('en-US', { weekday: 'long' })
			.slice(0, 3);
		const month = date
			.toLocaleDateString('en-US', { month: 'long' })
			.slice(0, 3);
		const dayNumber = date.getDate();

		setDate(`${day}, ${dayNumber} ${month}`);
	}, [time]);

	return <div>{date}</div>;
}

export default DateFiveDay;
