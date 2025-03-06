import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [age, setage] = useState()
  const Navigate = useNavigate()


  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/create-user", { name, email, age })
      .then(result => {
        console.log(result)
        Navigate('/')
      })
      .catch(error => console.log(error))
  }
  return (

    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Form onSubmit={Submit}>
          <h2>Create My User</h2>
          <Form.Group className="mb-4" controlId="formGroupEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name"
              onChange={(e) => setname(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formGroupPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email"
              onChange={(e) => setemail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formGroupPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control type="age" placeholder="Enter Age"
              onChange={(e) => setage(e.target.value)} />
          </Form.Group>

          <button className='btn btn-success'>Submit</button>

        </Form>
      </div>

    </div>
  )
}

export default CreateUser