import React, { useState } from 'react';
import InputField from '../../../../components/FormControl/InputField/InputField';

SearchPlace.propTypes = {};

function SearchPlace(props) {
	const [isSearch, setIsSearch] = useState(false);
	const [valueInput, setValueInput] = useState('');
	const [valueSubmit, setValueSubmit] = useState('');

	const handleSubmit = (evt) => {
		evt.preventDefault();
		setValueSubmit(valueInput);
	};

	return (
		<div>
			{!isSearch && (
				<button onClick={() => setIsSearch(true)}>Search Place</button>
			)}

			{isSearch && (
				<div>
					<button onClick={() => setIsSearch(false)}>X</button>

					<form onSubmit={handleSubmit}>
						<InputField
							placeholder='Search Place'
							handlechange={setValueInput}
						/>
						<button type='submit'>Search</button>
					</form>
				</div>
			)}
		</div>
	);
}

export default SearchPlace;
