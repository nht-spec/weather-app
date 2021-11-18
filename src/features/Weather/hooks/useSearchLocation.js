import { useEffect, useState } from 'react';
import weatherApi from '../../../api/weatherApi';

export default function useSearchLocation(query) {
	const [listSearch, setListSearch] = useState([]);

	useEffect(() => {
		query &&
			(async () => {
				const result = await weatherApi.getLocation({
					query,
				});
				setListSearch(result);
			})();
	}, [query]);

	return {
		listSearch,
	};
}
