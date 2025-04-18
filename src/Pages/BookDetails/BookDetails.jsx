import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utilities/AddToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const { id } = useParams()
    const bookId = parseInt(id)
    const data = useLoaderData()
    const book = data.find(book => book.bookId === bookId)
    const { image, publisher, tags, review, category, totalPages, yearOfPublishing } = book
    // console.log(book)

    const handleReadBtn = (id) => {
        addToStoredDB(id)
        MySwal.fire({
            title: <p>Good Job</p>,
            didOpen: () => {
                // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                MySwal.showLoading()
            },
        }).then(() => {
            return MySwal.fire(<p>Shorthand works too</p>)
        })
    }
    return (
        <div className='min-h-screen mt-10 px-3'>
            <div className='lg:flex gap-16 items-center mb-8'>
                <div className='lg:w-[30%]'>
                    <img className='h-[500px] p-16 border border-gray-300 rounded-2xl bg-gray-100' src={image} alt="" />
                </div>
                <div className='lg:w-[70%]'>
                    <h1 className='font-playFair font-bold text-3xl'>The Catcher in the Rye</h1>
                    <p className='text-xl text-gray-600 font-work-sans'>By :{publisher} </p>
                    <div className="divider"></div>
                    <div className='flex gap-8 font-work-sans text-gray-600'>
                        {category}
                    </div>
                    <div className="divider"></div>
                    <div>
                        <p className='font-work-sans'>
                            <span className='text-xl font-medium'>Review</span> : {review}
                        </p>
                    </div>
                    <div className='flex gap-8 items-center mt-8'>
                        <span className='text-xl font-medium'>Tags : </span>
                        {
                            tags?.map((data, index) => <p key={index} className='px-4 py-1 rounded text-green-500 bg-green-100'> {data}</p>)
                        }
                    </div>
                    <div className="divider"></div>
                    <div>
                        <table >
                            <tbody>
                                <tr>
                                    <td className='px-8 '>Number of Pages : </td>
                                    <td className='px-8'>{totalPages}</td>
                                </tr>
                                <tr>
                                    <td className='px-8 '>Publisher : </td>
                                    <td className='px-8'>{publisher}</td>
                                </tr>
                                <tr>
                                    <td className='px-8 '>Year of Publishing: : </td>
                                    <td className='px-8'>{yearOfPublishing}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='flex gap-8'>
                            <button onClick={() => handleReadBtn(id)} className="btn btn-accent bg-gray-50">Read</button>
                            <button className="btn btn-info text-white">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;