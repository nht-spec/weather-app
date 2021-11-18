import React, { useEffect, useState } from 'react';

function ListOfSearch({ listSearch, woeidsearch }) {
	const [woeidSearch, setWoeidSearch] = useState('');

	useEffect(() => {
		woeidsearch && woeidsearch(woeidSearch);
	}, [woeidSearch, woeidsearch]);

	return (
		<div>
			{listSearch.data?.map((data) => (
				<div onClick={() => setWoeidSearch(data.woeid)} key={data.woeid}>
					{data.title}
				</div>
			))}
		</div>
	);
}

export default ListOfSearch;
