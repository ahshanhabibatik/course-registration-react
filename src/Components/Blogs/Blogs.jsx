import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Blog from '../Blog/Blog';

const Blogs = ({ handleAddToBookmark }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('course.json')
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <div className='md:w-3/4 '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4'>
                {blogs.map((blog) => (
                    <Blog key={blog.course_id} blog={blog} handleAddToBookmark={handleAddToBookmark} />
                ))}
            </div>
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired
};
export default Blogs;
