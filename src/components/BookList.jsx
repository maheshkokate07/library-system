import { useSelector } from "react-redux";
import "../App.css"
import Book from "./Book";
import { useState } from "react";

function BookList(props) {

    const books = useSelector((store) => store.books.items)

    const [topBooks, setTopBooks] = useState(books.slice(0,4))

    const [seeMore, setSeeMore] = useState(false);

    function handleSeeMore() {
        if(!seeMore) {
            setTopBooks(books)
        } else {
            setTopBooks(books.slice(0,4))
        }
        setSeeMore(!seeMore)
    }

    return (
        <div className="book-list">
            <h2>Welcome To Library !</h2>
            <h3>--- Popular Books ---</h3>
            <div className="books-container">
                {
                    topBooks.map((book) => {
                        return <Book book={book} key={book.id} />
                    })
                }
            </div>
            <div className="see-more-btn">
                <button onClick={handleSeeMore}>{!seeMore ? "Show More" : "Show Less"}</button>
            </div>
        </div>
    )
}

export default BookList;