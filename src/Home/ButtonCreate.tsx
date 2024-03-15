import { Button, Modal, ModalBody } from 'flowbite-react';
import { useEffect, useState } from 'react';
import FormComponent, { AddProducts } from './FormCreatePro';

const BASE_URL = "https://fakestoreapi.com/products";

 

const Create= ()=> {
    const [openModal, setOpenModal] = useState(false);

  
    function getDataForm(product: AddProducts){
        console.log(product)
    }
    const CreateProduct = async () => {
        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    getDataForm
                }) 
                
            });
            const res = await response.json()
            console.log(res)
           
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setOpenModal(false);
        }
    };
    return (
        <div className='flex justify-center my-4'>
        <Button  onClick={() => setOpenModal(true)} color="blue">Create Product</Button>
        <Modal show={openModal}>
            <Modal.Header>Create New Product</Modal.Header>

            <Modal.Body>
                <FormComponent getDataForm={getDataForm}/>
                
            </Modal.Body>
            <div className='flex justify-center gap-8 mb-8'>
                <Button onClick={CreateProduct}>Create</Button>
                <Button onClick={() => setOpenModal(false)}>Cancel</Button>
            </div>
        </Modal>
    </div>
    );
}

export default Create;
