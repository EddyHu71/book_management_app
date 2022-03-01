import React, {useContext} from 'react';
import BookForm from "./BookForm";
import BooksContext from '../context/BooksContent';

const AddBook = ({ history}) => {
    
const { books, setBooks } = useContext(BooksContext);

 const handleOnSubmit = (book) => {
    setBooks([...books, book]);
    history.push('/');
    console.log(book);
 };

 return (
     <React.Fragment>
         <BookForm handleOnSubmit={handleOnSubmit} />
     </React.Fragment>
 )
};

export default AddBook;