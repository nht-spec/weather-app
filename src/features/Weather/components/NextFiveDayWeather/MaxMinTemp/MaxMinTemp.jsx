import React from 'react';
import './style.scss';

function MaxMinTemp({ maxTemp, minTemp }) {
	return (
		<div className='d-flex max-min-control'>
			<p className='max-temp'>{Math.trunc(maxTemp)}°C</p>
			<p className='min-temp'>{Math.trunc(minTemp)}°C</p>
		</div>
	);
}

export default MaxMinTemp;
