import React, { useEffect, useState } from 'react';

const Books = () => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch('/booksData.json')
            .then(res => res.json())
            .then(data => setAllBooks(data))
    }, [])
    return (
        <div>
            I'm Books
        </div>
    );
};

export default Books;