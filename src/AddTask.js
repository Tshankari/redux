import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {useDispatch} from 'react-redux'

import { addTaskToList } from './slice/taskSlice';
function AddTask() {
  const dispatch=useDispatch()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const addTask = (e) => {
    e.preventDefault()
    console.log(title, description);
    dispatch(addTaskToList({title, description}))
    setTitle("")
    setDescription("")
  }

  return (

    <div>
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
        <div className="d-grid">
          <Button variant="secondary" size="lg"

            onClick={(e) => addTask(e)}

          >
            Add New Task
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddTask;