import React, { useState } from 'react';
import InputField from '../../../../../components/FormControl/InputField/InputField';
import './style.scss';

function FormSearch({ handlesubmit }) {
	const [valueInput, setValueInput] = useState('');

	const handleSubmit = (evt) => {
		evt.preventDefault();
		handlesubmit && handlesubmit(valueInput);
	};

	return (
		<form className='d-flex form-control' onSubmit={handleSubmit}>
			<div className='d-flex input-field-control align-center'>
				<span className='material-icons-round'>search</span>
				<InputField placeholder='Search Place' handlechange={setValueInput} />
			</div>
			<button className='btn-search f-family c-lavender cursor' type='submit'>
				Search
			</button>
		</form>
	);
}

export default FormSearch;
