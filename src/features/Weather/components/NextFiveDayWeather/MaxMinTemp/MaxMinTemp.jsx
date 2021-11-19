import React, { useEffect, useState } from 'react';
import './style.scss';

function MaxMinTemp({ maxTemp, minTemp, isChangeDegree }) {
	const [maxTempF, setMaxTempF] = useState('');
	const [minTempF, setMinTempF] = useState('');

	useEffect(() => {
		setMaxTempF(Math.trunc((maxTemp * 9) / 5 + 32));
		setMinTempF(Math.trunc((minTemp * 9) / 5 + 32));
	}, [maxTemp, minTemp]);

	return (
		<div className='d-flex max-min-control'>
			{!isChangeDegree && (
				<>
					<p className='max-temp'>{Math.trunc(maxTemp)}°C</p>
					<p className='min-temp'>{Math.trunc(minTemp)}°C</p>
				</>
			)}
			{isChangeDegree && (
				<>
					<p className='max-temp'>{maxTempF}℉</p>
					<p className='min-temp'>{minTempF}℉</p>
				</>
			)}
		</div>
	);
}

export default MaxMinTemp;
