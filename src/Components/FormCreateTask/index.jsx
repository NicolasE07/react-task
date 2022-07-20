import React, { useContext, useState } from 'react';
import { ContextTask } from '../../Context';
import './FormCreateTask.css';

const FormCreateTask = (props) => {
	const [textAreaValue, setTextAreaValue] = useState('');
	const [request, setRequest] = useState(false);
	const { addTask } = useContext(ContextTask);

	const onChange = (event) => {
		setTextAreaValue(event.target.value);
        setRequest(false)
	};
	const cancel = () => {
		props.setOpenModal(false);
	};
	const onSubmitAdd = (event) => {
        event.preventDefault();
		if (!textAreaValue) {
            setRequest(true)
		} else {
			addTask(textAreaValue);
            props.setOpenModal(false)
		}
	};
	return (
		<form onSubmit={onSubmitAdd} className="form">
			<label htmlFor="newTask">New Task...</label>
            {request && <p>Escribe la tarea</p>}
			<textarea onChange={onChange} id="newTask" rows="4" placeholder="EXAMPLE: Go to school" />
			<div className="bottons">
				<button onClick={cancel} className="button__cancel button" type="button">
					Cancel
				</button>
				<button className="button__add button" type="submit">
					Add
				</button>
			</div>
		</form>
	);
};

export { FormCreateTask };
