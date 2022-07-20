import React, { createContext, useEffect, useState } from 'react';

import { useLocalStorage } from './useLocalStorage';

const ContextTask = createContext();

const TaskProvaider = (props) => {
	const { item, saveLocal, loading, error } = useLocalStorage('TASK_V1', []);
	const TasksCompleted = item.filter((taskCom) => !!taskCom.status).length;
	const totalTasks = item.length;
	const [inputSearch, setInputSearch] = useState('');
	const [openModal, setOpenModal] = useState(false);

	let searchFilter = [];
	if (!inputSearch.length >= 1) {
		searchFilter = item;
	} else {
		searchFilter = item.filter((task) => {
			const taskLower = task.task.toLowerCase();
			const inputLower = inputSearch.toLowerCase();
			return taskLower.includes(inputLower);
		});
	}

	const addTask = (text) => {
		const newTasks = [...item];
		newTasks.push({
			task: text,
			status: false
		})
		saveLocal(newTasks);
	};
	const deleteTask = (text) => {
		const taskIndex = item.findIndex((task) => task.task === text);
		const newTasks = [...item];
		newTasks.splice(taskIndex, 1);
		saveLocal(newTasks);
	};
	const completedTask = (text) => {
		const taskIndex = item.findIndex((task) => task.task === text);
		const newTasks = [...item];
		newTasks[taskIndex].status = !newTasks[taskIndex].status;
		saveLocal(newTasks);
	};
	return (
		<ContextTask.Provider
			value={{
				loading,
				error,
				totalTasks,
				TasksCompleted,
				inputSearch,
				searchFilter,
				openModal,
				addTask,
				setOpenModal,
				setInputSearch,
				completedTask,
				deleteTask,
			}}
		>
			{props.children}
		</ContextTask.Provider>
	);
};

export { ContextTask, TaskProvaider };
