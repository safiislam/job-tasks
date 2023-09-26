// import { Button, Modal } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import Modal from './Modal/Modal';

const Problem2 = (props) => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch('https://contact.mediusware.com/api/country-contacts/united%20states/',)
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])
    console.log(datas)
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };
    return (
        <>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h2>Modal Content</h2>
                <p>This is the content of the modal.</p>
            </Modal>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                    <div className="d-flex justify-content-center gap-3">
                        <button className="btn btn-lg btn-outline-primary" type="button" onClick={handleOpenModal} >All Contacts</button>
                        <button className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Problem2;