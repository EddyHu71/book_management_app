import React, {useContext} from "react";

import BooksContext from "../context/BooksContent";
import Book from "./Book";
import _ from 'lodash';

const BooksList = () => {
    const {books, setBooks} = useContext(BooksContext);

    const handleRemoveBook = (id) => {
        setBooks(books.filter((book) => book.id !== id));
    };

    return (
        <React.Fragment>
            <div className="book-list">
                {
                    !_.isEmpty(books) ? (
                        books.map((book) => (
                            <Book key = {book.id} {...book} handleRemoveBook={handleRemoveBook} />
                        ))
                    ) : (
                        <p className="message">No book available. Please add some books.</p>
                    )
                }
            </div>
        </React.Fragment>
    );
};

export default BooksList;