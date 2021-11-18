import { useEffect, useState } from 'react';
import weatherApi from '../../../api/weatherApi';

export default function useGetCityDefault(lattlong) {
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
