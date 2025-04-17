import React, { Suspense, } from 'react';
import Book from '../Book/Book';

const Books = ({ books }) => {


    // useEffect(() => {
    //     fetch('/booksData.json')
    //         .then(res => res.json())
    //         .then(data => setAllBooks(data))
    // }, [])

    return (
        <div>
            <h1 className='text-3xl text-center'>I'm Books</h1>
            <Suspense fallback={<span>Loading ....</span>}>
                <div className='grid grid-cols-3 gap-8 mb-8'>
                    {
                        books.map((book, index) => <Book book={book} key={index} />)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;