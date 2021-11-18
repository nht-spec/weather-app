import React, { useEffect, useState } from 'react';
import useSearchLocation from '../../hooks/useSearchLocation';
import FormSearch from './FormSearch/FormSearch';
import ListOfSearch from './ListOfSearch/ListOfSearch';
import './style.scss';

function SearchPlace({ woeidsearch }) {
	const [isSearch, setIsSearch] = useState(false);
	const [valueSubmit, setValueSubmit] = useState('');
	const [woeidSearch, setWoeidSearch] = useState('');
	const { listSearch } = useSearchLocation(valueSubmit);

	useEffect(() => {
		woeidsearch && woeidsearch(woeidSearch);
		woeidSearch && setIsSearch(false);
	}, [woeidSearch, woeidsearch]);

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
					<span className='material-icons-round d-flex c-lavender align-center space-between cursor'>
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
					<FormSearch handlesubmit={setValueSubmit} />
					<ListOfSearch listSearch={listSearch} woeidsearch={setWoeidSearch} />
				</div>
			)}
		</div>
	);
}

export default SearchPlace;
