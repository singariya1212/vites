import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, showUsers } from '../features/userDetailsclice';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

const Read = () => {
    const { users, loading } = useSelector((state) => state.app);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(0);
    useEffect(() => {
        dispatch(showUsers());
    }, [dispatch]);

    const handleOpenModal = (id) => {
      setSelectedUser(id)
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };
const handleDelete=(id)=>{
    dispatch(deleteUser(id))
}
const Navigate=useNavigate()

const handleEdit=(id)=>{
    Navigate(`/update/${id}`)
}
    return (
        loading ? (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        ) : (
            <>
                {/* <button className="btn btn-primary" onClick={handleOpenModal}>Open Modal</button> */}
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} id={selectedUser}/>
                {users && users.map((data) => (
                    <div className="card w-50 mx-auto my-2" key={data.id}>
                        <div className="card-body">
                            <h5 className="card-title">Card title: {data.name}</h5>
                            <h5 className="card-title">Gender: {data.gender}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-primary m-3" onClick={() => handleOpenModal(data.id)}>View User</button>
                            <button  className="btn btn-secondary m-3" onClick={()=>{handleDelete(data.id)}}>Delete</button>
                            <button  className="btn btn-secondary" onClick={()=>{handleEdit(data.id)}} >Edit</button>

                        </div>
                    </div>
                ))}
            </>
        )
    );
};

export default Read;