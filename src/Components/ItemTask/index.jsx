import React from 'react';

import './ItemTask.css';
const ItemTask = (props) => {
	return (
		<li className="ItemTask">
			<span onClick={props.onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>✔</span>
			<p className={`ItemTask-p ${props.completed && 'ItemTask-p--complete'}`}>{props.text}</p>
			<span onClick={props.onDelete} className="Icon Icon-delete">🗑</span>
		</li>
	);
};

export { ItemTask };
