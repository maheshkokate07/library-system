import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "../App.css";

function BookDetail() {
    const params = useParams();
    const books = useSelector((store) => store.books.items);

    const book = books.filter(book => book.id == params.id);
    console.log(book)

    return (
        <>
        <div className="book-details">
            <div className="go-back">
            <Link to="/books">
                <i className="fa-solid fa-angle-left"></i><span>Back</span>
            </Link>
            </div>
            <div className="book-details-container">
                <div className="book-image-container">
                    <img src={book[0].cover_image} alt="book-image" />
                </div>
                <div className="book-data">
                    <p className="book-title"><span>Title: </span>{book[0].title}</p>
                    <p className="book-description"><span>Description: </span>{book[0].description}</p>
                    <p className="book-author"><span>Author: </span>{book[0].author}</p>
                    <p className="book-year"><span>Year: </span>{book[0].publication_year}</p>
                    <p className="book-rating"><span>Ratings: </span>{book[0].rating}/5</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default BookDetail;