import React from 'react';
import ReactDOM from 'react-dom';

import './ModalCreate.css'
const ModalCreate = ({children}) => {
    return ReactDOM.createPortal(
        <div className="containerModal">
        {children}
        </div>,
        document.getElementById('modal')

    );
}
 
export {ModalCreate};