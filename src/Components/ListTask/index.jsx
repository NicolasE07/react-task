import React from 'react';

import './ListTask.css'
const ListTask = (props) => {
    return ( 
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
     );
}
 
export {ListTask};