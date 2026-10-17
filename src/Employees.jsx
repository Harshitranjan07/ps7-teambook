import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Employees() {
  const [employees, setEmployees] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=30')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load employees')
        }
        return res.json()
      })
      .then((data) => {
        setEmployees(data.users)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const filteredEmployees = employees.filter((emp) => {
    const fullName = emp.firstName + ' ' + emp.lastName
    return fullName.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="container">
      <div className="top-bar">
        <h2>TeamBook</h2>
        <Link to="/" className="back-btn">Home</Link>
      </div>

      <input
        type="text"
        placeholder="Search employees by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {loading && <p>Loading employees...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <div className="grid">
          {filteredEmployees.map((emp) => (
            <Link key={emp.id} to={'/employees/' + emp.id} className="card">
              <img src={emp.image} alt={emp.firstName} />
              <h3>{emp.firstName} {emp.lastName}</h3>
              <p>{emp.company.title}</p>
              <p className="dept">{emp.company.department}</p>
            </Link>
          ))}
          {filteredEmployees.length === 0 && <p>No employees found.</p>}
        </div>
      )}
    </div>
  )
}

export default Employees
