import React from 'react';
import PropTypes from 'prop-types';

InputField.propTypes = {};

function InputField({ handlechange, placeholder }) {
	const handleChange = (value) => {
		handlechange && handlechange(value.target.value);
	};

	return (
		<div>
			<input type='text' placeholder={placeholder} onChange={handleChange} />
		</div>
	);
}

export default InputField;
