import React from 'react';
import './style.scss';

const URL_IMAGE = 'https://www.metaweather.com/static/img/weather/png/';

function ThumbnailFiveDay({ thumbnail }) {
	console.log(thumbnail);
	return (
		<div className='thumbnail-five-day-control d-flex'>
			<img
				className='thumbail-image'
				src={`${URL_IMAGE}${thumbnail}.png`}
				alt=''
			/>
		</div>
	);
}

export default ThumbnailFiveDay;
