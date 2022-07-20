import React from 'react';
import { TaskProvaider } from './Context';
//Componente
import { AppUI } from './AppUI';

function App() {
	return (
		<TaskProvaider>
			<AppUI />
		</TaskProvaider>
	);
}

export default App;
