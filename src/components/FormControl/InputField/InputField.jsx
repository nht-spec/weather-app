import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import '../../../index.scss';

InputField.propTypes = {};

function InputField({ handlechange, placeholder }) {
	const handleChange = (value) => {
		handlechange && handlechange(value.target.value);
	};

	return (
		<input
			className='f-family background-darkslategray input-filed'
			type='text'
			placeholder={placeholder}
			onChange={handleChange}
		/>
	);
}

export default InputField;
