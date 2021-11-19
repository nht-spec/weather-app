import React from 'react';
import './style.scss';

function Humidity({ humidity }) {
	return (
		<div className='f-family humidity-control background-darkslategray d-flex'>
			<h2 className='today-hightlight-title'>Humidity</h2>
			<h2 className='d-flex percent-control'>
				{humidity}
				<p className='percent-unit'>%</p>
			</h2>

			<div className='progressbar-control '>
				<div className='d-flex level-progress-title'>
					<p>0</p>
					<p>50</p>
					<p>100</p>
				</div>
				<div className='progressbar'>
					<div
						className='progressbar-yellow'
						style={{ width: `${humidity}%` }}
					></div>
				</div>
				<p className='level-progress-title percent-unit-two'>%</p>
			</div>
		</div>
	);
}

export default Humidity;
