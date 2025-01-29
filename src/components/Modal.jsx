import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Modal = ({ isOpen, onClose,id }) => {
    const [particular, setParticular]=useState('')
console.log(id,"id");

     useEffect(()=>{
        axios.get(`https://677818a080a79bf91903e755.mockapi.io/crud/${id}`)
        .then((data)=>{setParticular(data.data);
        })
    },[id])
console.log(particular,"parti from ");

    if (!isOpen) return null; 
   
    return (
        <div className="modal show border-5" style={{ display: 'block' }} tabIndex="-1" onClick={onClose}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>{particular.name}.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;