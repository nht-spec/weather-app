import React from 'react';
import './style.scss';

function AirPressure({ airpressure }) {
	return (
		<div className='airpressure-control d-flex background-darkslategray'>
			<h2 className='today-hightlight-title'>Air Pressure</h2>
			<h2 className='d-flex airpressure-title'>
				{Math.trunc(airpressure)} <p className='airpressure-unit'>mb</p>
			</h2>
		</div>
	);
}

export default AirPressure;
