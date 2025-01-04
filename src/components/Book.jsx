import { Link } from "react-router-dom";
import "../App.css";

function Book(props) {
    return (
        <>
            <div className="book-item">
                <div className="book-image-container">
                    <img src={props.book.cover_image} alt="book-image" />
                </div>
                <div className="book-data">
                    <p className="book-title">{props.book.title}</p>
                    <p className="book-author">- by {props.book.author}</p>
                    <Link to={`/book/${props.book.id}`}>
                        <button className="view-details-btn">View Details</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Book;