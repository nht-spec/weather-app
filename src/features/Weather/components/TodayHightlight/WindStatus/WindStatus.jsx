import React from 'react';
import './style.scss';
import './style.scss';

function WindStatus({ wind, compass }) {
	return (
		<div className='f-family wind-control c-lavender background-darkslategray d-flex'>
			<h2 className='today-hightlight-title'>Wind status</h2>
			<h2 className='d-flex wind-speed'>
				{Math.trunc(wind)}
				<p className='wind-speed-unit'>mph</p>
			</h2>
			<div className='d-flex compass-control'>
				<span id={compass} className='material-icons-round d-flex'>
					near_me
				</span>
				<p>{compass}</p>
			</div>
		</div>
	);
}

export default WindStatus;
