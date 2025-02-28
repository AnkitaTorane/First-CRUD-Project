import React, { use, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import axios from 'axios'

function User() {
  const [User, setUser] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001')
      .then(result => setUser(result.data))
      .catch(error => console.log(error))

  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/deleteUser/' + id)
      .then(res => {
        console.log(res)
        window.location.reload()
      })
      .catch(error => console.log(error))
  }


  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-withe rounded p-3">
        <Link to="/create" className='btn btn-success'>Add+</Link>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              User.map((User) => {
                return <tr>
                  <td>{User.Name}</td>
                  <td>{User.Email}</td>
                  <td>{User.Age}</td>;
                  <td>
                    <Link to={'/Update/${user._Id}'} className='btn btn-success'>Update</Link>
                    <button className='btn btn-danger'
                      onClick={(e) => handleDelete(user._id)}>Delete</button>
                  </td>
                </tr>

              })
            }
            <tr>

              <td>ankita</td>
              <td>ankita@gamil.com</td>
              <td>20</td>
              <tb>
                <Link to="/Update" className='btn btn-success'>Update</Link>
                <button className='btn btn-danger'>Delete</button>
              </tb>
            </tr>
          </tbody>
        </Table>

      </div>

    </div>
  )
}

export default User
