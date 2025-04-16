import React from 'react';

const Banner = () => {
    return (
        <div className='lg:flex justify-around  items-center bg-[#f3f3f3]  rounded-3xl my-16 py-10'>
            <div>
                <h1 className='text-5xl font-bold'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn btn-success mt-4'>
                    View The List
                </button>
            </div>
            <div>
                <img src="https://i.ibb.co.com/B2SC3NMw/books.webp" alt="" />
            </div>
        </div>
    );
};

export default Banner;