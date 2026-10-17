import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function EmployeeDetail() {
  const { id } = useParams()
  const [employee, setEmployee] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://dummyjson.com/users/' + id)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Employee not found')
        }
        return res.json()
      })
      .then((data) => {
        setEmployee(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <div className="container">
        <p>Loading...</p>
      </div>
    )
  }

  if (error || !employee) {
    return (
      <div className="container">
        <Link to="/employees" className="back-btn">← Back to Employees</Link>
        <p style={{ color: 'red' }}>{error || 'Employee not found'}</p>
      </div>
    )
  }

  return (
    <div className="container">
      <Link to="/employees" className="back-btn">← Back to Employees</Link>
      
      <div className="detail-box">
        <img
          src={employee.image}
          alt={employee.firstName}
          className="detail-img"
        />
        <h2>{employee.firstName} {employee.lastName}</h2>

        <div className="info-list">
          <p><strong>Age:</strong> {employee.age}</p>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Phone:</strong> {employee.phone}</p>
          <p><strong>City:</strong> {employee.address.city}</p>
          <p><strong>Company:</strong> {employee.company.name}</p>
          <p><strong>Department:</strong> {employee.company.department}</p>
          <p><strong>Job Title:</strong> {employee.company.title}</p>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDetail
