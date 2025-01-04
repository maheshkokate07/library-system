import { useSelector } from "react-redux";
import "../App.css"
import { Link, Outlet } from "react-router-dom";

function Home() {

    const books = useSelector((store) => store.books.items);  
    
    // Dynamically fetch the categories from the books
    const uniqueCategories = [...new Set(books.flatMap(item => item.categories))];

    return (
        <>
            <div className="home">
                <div className="container">
                    <div className="categories">
                        <h3>--- Categories ---</h3>
                        <ul>
                            {
                                uniqueCategories.map((c) => (
                                    <Link to={`books/${c}`} key={c}>
                                        <li>{c}</li>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Home;