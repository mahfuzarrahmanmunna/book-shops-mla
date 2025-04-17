import React, { } from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';


const Book = ({ book }) => {
    // const books = use(bookPromise);
    console.log(book)
    const { bookId, publisher, category, image, bookName, rating, tags, yearOfPublishing
    } = book
    return (
        <Link to={`bookDetails/${bookId}`}>
            <div>
                <div className="card bg-base-100 w-96 h-[382px] shadow-sm">
                    <figure className='bg-gray-300 py-8'>
                        <img
                            src={image}
                            alt="Shoes"
                            className='h-32'
                        />
                    </figure>
                    <div className="card-body">
                        <div className='flex gap-6 text-[#23BE0A] font-medium font-work-sans'>
                            {
                                tags.map((tag, index) => <div key={index} className=' bg-[#98cf9011]  px-4 py-2 rounded'>
                                    {tag}
                                </div>)
                            }
                        </div>
                        <h2 className="card-title font-playFair" >
                            {bookName}
                            <div className="badge badge-secondary font-bold">{yearOfPublishing
                            }</div>
                        </h2>
                        <p className='font-medium font-work-sans'>By : {publisher}</p>
                        <div className='border-t border-dashed'>

                        </div>
                        <div className="card-actions justify-between">
                            <div >
                                <div className="badge badge-outline">{category}</div>

                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className="badge badge-outline">{rating}</div>
                                <FaRegStar size={15} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;