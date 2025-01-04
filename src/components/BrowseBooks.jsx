    import { useSelector } from "react-redux";
    import Book from "./Book";
    import "../App.css"
    import { useState } from "react";

    function BrowseBooks() {

        const books = useSelector((store) => store.books.items)

        // State for filtered books on search
        const [filteredBooks, setFilteredBooks] = useState(books);

        // Function for handling the searched book
        function handleSearch(searchText) {
            if(searchText == "") {
                setFilteredBooks(books)
            }
            const fbooks = books.filter((book) => {
                return book.title.toLowerCase().includes(searchText.toLowerCase()) ||
                    book.author.toLowerCase().includes(searchText.toLowerCase())
            })
            setFilteredBooks(fbooks);
        }

        return (
            <div className="book-list">
                <div className="search">
                    <input type="text" placeholder="Enter title or author name" className="search-input" onChange={(e) => handleSearch(e.target.value)} />
                    {/* <button onClick={handleSearch}>Search</button> */}
                </div>
                <div className="books-container browse">
                    {
                        filteredBooks.map((book) => {
                            return <Book book={book} key={book.id} />
                        })
                    }
                </div>
            </div>
        )
    }

    export default BrowseBooks;