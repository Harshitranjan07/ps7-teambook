import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container home">
      <h1>TeamBook</h1>
      <p>Welcome to TeamBook employee directory.</p>
      <Link to="/employees" className="btn">
        View Team
      </Link>
    </div>
  )
}

export default Home
