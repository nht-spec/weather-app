import React, { useEffect, useState } from 'react';
import InputField from '../../../../../components/FormControl/InputField/InputField';
import useSearchLocation from '../../../hooks/useSearchLocation';
import './style.scss';

function FormSearch({ listsearch }) {
	const [valueInput, setValueInput] = useState('');
	const [valueSubmit, setValueSubmit] = useState('');

	const { listSearch } = useSearchLocation(valueSubmit);

	useEffect(() => {
		listsearch && listsearch(listSearch);
	}, [listSearch, listsearch]);

	const handleSubmit = (evt) => {
		evt.preventDefault();
		setValueSubmit(valueInput);
	};

	return (
		<form className='d-flex form-control' onSubmit={handleSubmit}>
			<div className='d-flex input-field-control align-center'>
				<span className='material-icons-round'>search</span>
				<InputField
					placeholder='search location'
					handlechange={setValueInput}
				/>
			</div>
			<button className='btn-search f-family c-lavender cursor' type='submit'>
				Search
			</button>
		</form>
	);
}

export default FormSearch;
