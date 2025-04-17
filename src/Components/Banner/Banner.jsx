import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-base-200 h-[580px] lg:rounded-3xl mt-3">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://i.ibb.co.com/B2SC3NMw/books.webp"
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold font-playFair">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn  btn-success mt-4 text-white font-work-sans">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;