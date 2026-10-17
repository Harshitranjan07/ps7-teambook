import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="container not-found">
      <h2>Page not found</h2>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound
