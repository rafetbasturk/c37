import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div>
      <h3 className="err">Opps! No Page</h3>
      <Link to="/">Back To Home</Link>
    </div>
  )
}

export default Error
