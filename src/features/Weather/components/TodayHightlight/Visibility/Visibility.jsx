import React from 'react';
import './style.scss';
function Visibility({ visibility }) {
	return (
		<div className='d-flex visibility-control background-darkslategray'>
			<h2 className='today-hightlight-title'>Visibility</h2>
			<h2 className='d-flex  visibility-title'>
				{Math.trunc(visibility)}
				<p className='visibility-unit'>miles</p>
			</h2>
		</div>
	);
}

export default Visibility;
