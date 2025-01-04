import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";

function AddBook() {

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        publication_year: '',
        rating: '',
        categories: '',
        description: '',
        cover_image: ''
    });

    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function validateForm() {
        const newErrors = {};

        if(!formData.title) newErrors.title = "Required !";
        if(!formData.author) newErrors.author = "Required !";
        if(!formData.publication_year || isNaN(formData.publication_year)) newErrors.publication_year = "Required !"
        if(!formData.rating || isNaN(formData.rating) || formData.rating < 0 || formData.rating > 5) newErrors.rating = "Required (0-5) !";
        if(!formData.categories) newErrors.categories = "Required !";
        if(!formData.description) newErrors.description = "Required !";
        if(!formData.cover_image) newErrors.cover_image = "Required !";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(validateForm()) {
            const newId = Date.now()
            const formattedData = {
                ...formData,
                id: newId,
                categories: formData.categories.split(',').map((c) => c.trim())
            };
            dispatch(addBook(formattedData));
            setFormData({
                title: '',
                author: '',
                publication_year: '',
                rating: '',
                categories: '',
                description: '',
                cover_image: '',
            });
            navigate(`/book/${newId}`);
        }
    }

    return (
        <div className="add-book-container">
            <div className="add-book-page">
                <h2>Add a New Book</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title: {errors.title && <span className="error">{errors.title}</span>}</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Author: {errors.author && <span className="error">{errors.author}</span>}</label>
                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                        />
                        
                    </div>
                    <div>
                        <label>Publication Year: {errors.publication_year && <span className="error">{errors.publication_year}</span>}</label>
                        <input
                            type="number"
                            name="publication_year"
                            value={formData.publication_year}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Rating (0-5): {errors.rating && <span className="error">{errors.rating}</span>}</label>
                        <input
                            type="number"
                            step="0.1"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Categories (comma-separated): {errors.categories && <span className="error">{errors.categories}</span>}</label>
                        <input
                            type="text"
                            name="categories"
                            value={formData.categories}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Description: {errors.description && <span className="error">{errors.description}</span>}</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div>
                        <label>Cover Image URL: {errors.cover_image && <span className="error">{errors.cover_image}</span>}</label>
                        <input
                            type="text"
                            name="cover_image"
                            value={formData.cover_image}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Add Book</button>
                </form>
            </div>
        </div>
    )
}

export default AddBook;