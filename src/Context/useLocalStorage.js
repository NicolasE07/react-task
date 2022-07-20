import { useEffect, useState } from 'react';


function useLocalStorage(itemName, initialValue) {
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const [item, setItem] = useState(initialValue);
	useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(itemName);
				let parseItem;
				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parseItem = initialValue;
				} else {
					parseItem = JSON.parse(localStorageItem);
				}
				setItem(parseItem);
				setLoading(false);
			} catch (error) {
				setError(error);
			}
		}, 2000);
	}, []);

	const saveLocal = (newItem) => {
		try {
			const stringifyItem = JSON.stringify(newItem);
			localStorage.setItem(itemName, stringifyItem);
			setItem(newItem);
		} catch (error) {
			setError(error);
		}
	};

	return {
		item,
		saveLocal,
		loading,
		error,
	};
}


export {useLocalStorage}