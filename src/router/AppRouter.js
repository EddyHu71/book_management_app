import React from 'react';
import {} from "react-router-dom"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BooksContext from'../context/BooksContent';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import EditBook from '../components/EditBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {
 const [books, setBooks] = useLocalStorage('books', []);

 return (
     <BrowserRouter>
     <div>
        <Header />
         <div className="main-content">
            {/* <Routes>
                <Route component={BooksList} path="/" exact = {true} />
                <Route component={AddBook} path="/add" />
                <Route
                    render={(props) => (
                        <AddBook {...props} books={books} setBooks={setBooks} />
                    )}
                    path="/add"
                />
                <Route render={(props) => (
                    <EditBook {...props} books={books} setBooks = {setBooks} />
                )} path="/edit/:id" />

                <Route component = {() => <Redirect to = "/" />} />
            </Routes> */}
            <BooksContext.Provider value = {{books, setBooks}} >
                <Routes>
                    <Route component = {BooksList} path = "/" exact = {true} />
                    <Route component = {AddBook} path = "/add" />
                    <Route component = {EditBook} path = "/edit/:id" />
                    {/* <Route component = {() => <Redirect to = "/" />} /> */}
                </Routes>
            </BooksContext.Provider>
         </div>
     </div>
     </BrowserRouter>
 )
};

export default AppRouter;