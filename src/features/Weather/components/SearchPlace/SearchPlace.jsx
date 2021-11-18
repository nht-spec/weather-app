import React, { useState } from 'react';
import InputField from '../../../../components/FormControl/InputField/InputField';

SearchPlace.propTypes = {};

function SearchPlace(props) {
	const [isSearch, setIsSearch] = useState(false);
	return (
		<div>
			{!isSearch && <button onClick={() => setIsSearch(true)}>Search</button>}

			{isSearch && (
				<div>
					<button onClick={() => setIsSearch(false)}>X</button>
					<InputField />
				</div>
			)}
		</div>
	);
}

export default SearchPlace;
