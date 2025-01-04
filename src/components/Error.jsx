import { Link, useRouteError } from "react-router-dom"
import "../App.css"

function Error() {
    const err = useRouteError()
    return <div className="error">
        <h2>OOPS !</h2>
        <h1>{err.status ? err.status : "404"} {err.statusText ? err.statusText : "Not Found"} !</h1>
        <h2>{err.data}</h2>
        <Link to="/">
            <h3>Go Back to Home Page</h3>
        </Link>
    </div>
}

export default Error;