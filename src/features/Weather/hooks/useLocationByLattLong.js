import weatherApi from 'api/weatherApi';
import { useEffect, useState } from 'react';

export default function useLocationByLattLong(lattlong) {
	const [cityDefault, setCityDefault] = useState([]);
	useEffect(() => {
		lattlong &&
			(async () => {
				const result = await weatherApi.getLocation({
					lattlong,
				});

				setCityDefault(result);
			})();
	}, [lattlong]);
	return {
		cityDefault,
	};
}
