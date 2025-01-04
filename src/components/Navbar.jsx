import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
    return (
        <>
            <div className="navbar">
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/books">
                            Browse Books
                        </Link>
                    </li>
                    <li>
                        <Link to="/add-book">
                            Add Book
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;