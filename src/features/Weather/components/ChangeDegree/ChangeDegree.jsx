import React, { useEffect, useState } from 'react';
import './style.scss';

function ChangeDegree({ ischangedegree }) {
	const [changeDegree, setChangeDegree] = useState(false);

	useEffect(() => {
		ischangedegree && ischangedegree(changeDegree);
	}, [changeDegree, ischangedegree]);

	return (
		<div className='d-flex f-family  degree-control'>
			<button
				onClick={() => setChangeDegree(!changeDegree)}
				className={
					!changeDegree ? 'degree-c degree degree-choose' : 'degree-c degree'
				}
			>
				℃
			</button>
			<button
				onClick={() => setChangeDegree(!changeDegree)}
				className={changeDegree ? 'degree degree-choose' : 'degree'}
			>
				℉
			</button>
		</div>
	);
}

export default ChangeDegree;
