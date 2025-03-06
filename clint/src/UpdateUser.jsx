import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'


function UpdateUser() {
  const { id } = useParams()
  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [age, setage] = useState()
  const Navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3001/get-User/' + id)
      .then(result => {
        console.log(result)
        setname(result.data.name)
        setemail(result.data.email)
        setage(result.data.age)

      })
      .catch(error => console.log(error))

  }, [])

  const Update = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3001/UpdateUser/" + id, { name, email, age })
      .then(result => {
        console.log(result)
        Navigate('/')

      })
      .catch(error => console.log(error))
  }



  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Form onSubmit={Update}>
          <h2>Update</h2>
          <Form.Group className="mb-4" controlId="formGroupEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name"
              value={name} onChange={(e) => setname(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formGroupPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email"
              value={email} onChange={(e) => setemail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formGroupPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control type="age" placeholder="Enter Age"
              value={age} onChange={(e) => setage(e.target.value)} />
          </Form.Group>

          <button className='btn btn-success'>Update</button>

        </Form>
      </div>

    </div>
  )
}

export default UpdateUser