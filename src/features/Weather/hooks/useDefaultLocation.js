import { useEffect, useState } from 'react';

export default function useDefaultLocation() {
	const [lattLong, setLattLong] = useState('');

	useEffect(() => {
		function success(pos) {
			const crd = pos.coords;
			const latitude = crd.latitude;
			const longitude = crd.longitude;

			if (latitude && longitude) setLattLong(`${latitude},${longitude}`);
		}

		function error(err) {
			err.message && setLattLong('36.96,-122.02');
		}

		navigator.geolocation.getCurrentPosition(success, error);
	}, []);

	return {
		lattLong,
	};
}
