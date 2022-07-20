import React, { useContext } from 'react';
import { ContextTask } from '../../Context';

import './SearchTask.css';

const SearchTask = () => {
	const { inputSearch, setInputSearch } = useContext(ContextTask);
	const inputValue = (event) => {
		setInputSearch(event.target.value);
	};
	return <input onChange={inputValue} value={inputSearch} className="input__search" type="text" placeholder="Search Task" />;
};

export { SearchTask };
