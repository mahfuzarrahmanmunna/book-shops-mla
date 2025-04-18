import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredBook } from '../../Utilities/AddToDB';
import Book from '../Book/Book';

const ReadList = () => {

    const [myReadList, setMyReadList] = useState([])
    const [sort, setSort] = useState('')

    const data = useLoaderData()
    // console.log(data)

    useEffect(() => {
        const storedBookData = getStoredBook()
        const convertedStoredBookData = storedBookData?.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredBookData.includes(book.bookId))
        setMyReadList(myReadList)
    }, [])

    const handleShort = (type) => {
        setSort(type)
        if (type === 'pages') {
            const sortedByPage = [...myReadList].sort((a, b) => a.totalPages - b.totalPages);
            setMyReadList(sortedByPage)
        }
        else if (type === 'rating') {
            const sortedByRating = [...myReadList].sort((a, b) => a.rating - b.rating);
            setMyReadList(sortedByRating)
        }
    }
    return (
        <div className='min-h-screen'>
            <div className='flex justify-center my-12'>
                {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
                {/* For TSX uncomment the commented types below */}
                <button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                    sort by :  {sort ? sort : ''}
                </button>

                <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                    popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                    <li><a onClick={() => handleShort('pages')}>Pages</a></li>
                    <li><a onClick={() => handleShort('rating')}>Ratings</a></li>
                </ul>
            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Books" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div className='lg:grid grid-cols-3 gap-8'>
                        {
                            myReadList?.map(readList => <Book book={readList} key={readList.bookId} />)
                        }
                    </div>

                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist Books" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

            </div>
        </div>
    );
};

export default ReadList;