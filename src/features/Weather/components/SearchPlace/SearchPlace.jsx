import React, { useState } from 'react';
import InputField from '../../../../components/FormControl/InputField/InputField';
import './style.scss';

function SearchPlace(props) {
	const [isSearch, setIsSearch] = useState(false);
	const [valueInput, setValueInput] = useState('');
	const [valueSubmit, setValueSubmit] = useState('');

	const handleSubmit = (evt) => {
		evt.preventDefault();
		setValueSubmit(valueInput);
	};

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

					<form className='d-flex form-control' onSubmit={handleSubmit}>
						<div className='d-flex input-field-control align-center'>
							<span className='material-icons-round'>search</span>
							<InputField
								placeholder='Search Place'
								handlechange={setValueInput}
							/>
						</div>
						<button
							className='btn-search f-family c-lavender cursor'
							type='submit'
						>
							Search
						</button>
					</form>
				</div>
			)}
		</div>
	);
}

export default SearchPlace;
