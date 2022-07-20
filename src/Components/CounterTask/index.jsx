import React, { useContext } from 'react';
import { ContextTask } from '../../Context';

//Style
import './CounterTask.css';

const TaskCounter = () => {
	const { totalTasks, TasksCompleted } = useContext(ContextTask);

	return (
		<>
			{!totalTasks && <h2 className="counterTask">You have no pending tasks</h2>}
			{!!totalTasks && (
				<h2 className="counterTask">
					You have completed {TasksCompleted} of {totalTasks}{' '}
				</h2>
			)}
		</>
	);
};

export { TaskCounter };
