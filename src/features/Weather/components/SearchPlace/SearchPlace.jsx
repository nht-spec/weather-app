import React, { useEffect, useState } from 'react';
import FormSearch from './FormSearch/FormSearch';
import './style.scss';

function SearchPlace({ woeidsearch, isbackdefault }) {
	const [isSearch, setIsSearch] = useState(false);
	const [isBackDefault, setIsBackDefault] = useState(false);
	const [listSearch, setListSearch] = useState([]);
	const [woeidSearch, setWoeidSearch] = useState('');

	useEffect(() => {
		woeidsearch && woeidsearch(woeidSearch);
		woeidSearch && setIsSearch(false);
		woeidSearch && setIsBackDefault(false);
	}, [woeidSearch, woeidsearch]);

	useEffect(() => {
		isbackdefault && isbackdefault(isBackDefault);
	}, [isBackDefault, isbackdefault]);

	return (
		<div className='search-place-control'>
			{!isSearch && (
				<div className='btn-search-btn-default d-flex align-center space-between'>
					<button
						className='btn-search-place f-family c-lavender cursor'
						onClick={() => setIsSearch(true)}
					>
						Seach for places
					</button>
					<span
						onClick={() => setIsBackDefault(true)}
						className='material-icons-round d-flex c-lavender align-center space-between cursor'
					>
						my_location
					</span>
				</div>
			)}

			{isSearch && (
				<div className='dialog-search-control background-darkslategray d-flex'>
					<span
						onClick={() => setIsSearch(false)}
						className='material-icons-round c-lavender cursor d-flex'
					>
						close
					</span>
					<FormSearch listsearch={setListSearch} />

					<div className='list-search-control'>
						{listSearch.data?.map((data) => (
							<div
								className='value-search cursor f-family c-lavender d-flex align-center'
								onClick={() => setWoeidSearch(data.woeid)}
								key={data.woeid}
							>
								{data.title}
								<span className='material-icons-round'>chevron_right</span>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default SearchPlace;
