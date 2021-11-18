import React from 'react';
import PropTypes from 'prop-types';
import SearchPlace from 'features/Weather/components/SearchPlace/SearchPlace';

Contents.propTypes = {};

function Contents({ weatherData }) {
	console.log(weatherData);
	return (
		<div>
			contents
			<SearchPlace />
		</div>
	);
}

export default Contents;
