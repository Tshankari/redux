import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { setSelectedTask } from './slice/taskSlice';
import { updateTaskList } from './slice/taskSlice';
import { useDispatch, useSelector } from 'react-redux';

function MyVerticallyCenteredModal(props) {

const {selectedTask} =useSelector((state)=>state.tasks)
    const dispatch=useDispatch()

    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [id,setId]=useState(0)
  
  
    const updateTask=()=>{
    props.onHide()
    dispatch(updateTaskList({id,title,description}))
   }

    useEffect(()=>{
        setTitle(selectedTask.title)
        setDescription(selectedTask.description)
        setId(selectedTask.id)
    },[selectedTask])

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Task Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter task name"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Task Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter task description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                    </Form.Group>
               </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(e)=>updateTask(e)}>Update Task</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal