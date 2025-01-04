import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Book from "./Book";
import "../App.css";

function CategoryBooks() {

    const params = useParams();
    const books = useSelector((store) => store.books.items);

    // Get the category from params and filter the books having same category
    const categorisedBooks = books.filter(book => book.categories.includes(params.category))

    return (
        <div className="book-list">
            <h3>--- {`${params.category} Books`} ---</h3>
            <div className="books-container">
                {
                    categorisedBooks.map((book) => {
                        return <Book book={book} key={book.id} />
                    })
                }
            </div>
        </div>
    )
}

export default CategoryBooks;