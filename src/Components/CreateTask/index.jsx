import React from 'react';

import './CreateTask.css'


const CreateTask = (props) => {
    return ( 
        <button className='createTask' onClick={()=> props.setOpenModal(prevStatus => !prevStatus)} type='button'>+</button>
     );
}
 
export {CreateTask};