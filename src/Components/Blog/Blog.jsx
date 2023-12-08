import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaDollarSign, FaBookmark } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = ({ blog, handleAddToBookmark }) => {
    const { course_name, course_description, price, credit_hours, image_url } = blog;
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        if (!isSelected) {
            handleAddToBookmark(blog);
            setIsSelected(true);
        } 
        
        else {

            toast(`Course ${course_name} can not selected already in bookmarks.`);
        }
    };

    return (
        <div>
            <div className='bg-white p-2 rounded-xl shadow-lg h-full space-y-2 '>
                <img className='w-full' src={image_url} alt='' />
                <h1 className='text-md font-bold'>{course_name}</h1>
                <p className='content-between text-sm'>{course_description}</p>
                <div className='flex items-center gap-3'>
                    <p>
                        <FaDollarSign></FaDollarSign>
                    </p>
                    <p>Price: {price} </p>
                    <p>
                        <FaBookmark></FaBookmark>
                    </p>
                    <p>Credit: {credit_hours}hr</p>
                </div>
                <button
                    onClick={handleClick}
                    className={`w-full bg-sky-500 p-2 rounded-md`}
                >
                    Select
                </button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
};

export default Blog;
