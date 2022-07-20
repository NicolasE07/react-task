import React, { useContext } from 'react';
import { ContextTask } from './Context';

//imageIcon
import iconNotes from './iconNotes.svg';

//Componentes
import { TaskCounter } from './Components/CounterTask';
import { SearchTask } from './Components/SearchTask';
import { CreateTask } from './Components/CreateTask';
import { ListTask } from './Components/ListTask';
import { ItemTask } from './Components/ItemTask';
import { ModalCreate } from './Components/ModalCreate';
import { FormCreateTask } from './Components/FormCreateTask';

const AppUI = () => {
	const { error, loading, searchFilter, completedTask, deleteTask, openModal, setOpenModal } =
		useContext(ContextTask);
	return (
		<>
			<TaskCounter />
			<SearchTask />
			<ListTask>
				{error && <h2 className="loading">404</h2>}
				{loading && <h2 className="loading">Loading...</h2>}
				{!loading && !searchFilter.length && (
					<div className="create__task--img">
						<img src={iconNotes} />
						<div className="create__task">
							<p>Create your first task</p>
							<div className="btn_createTask">+</div>
						</div>
					</div>
				)}
				{searchFilter.map((oneTask) => (
					<ItemTask
						key={oneTask.task}
						text={oneTask.task}
						completed={oneTask.status}
						onComplete={() => completedTask(oneTask.task)}
						onDelete={() => deleteTask(oneTask.task)}
					/>
				))}
			</ListTask>

			{openModal && (
				<ModalCreate>
					<FormCreateTask setOpenModal={setOpenModal} />
				</ModalCreate>
			)}

			<CreateTask setOpenModal={setOpenModal} />
		</>
	);
};

export { AppUI };
