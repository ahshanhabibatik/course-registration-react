import PropTypes from 'prop-types';


const Bookmarks = ({ bookmarkedCourses, totalCreditHours, creditHourRemaining, totalPrice }) => {
    return (
        <div className="md:w-1/4 mt-5 ml-3 ">
            <div className="bg-white p-4 shadow-md rounded-lg ">
                <h2 className="text-xl text-blue-600 mb-4">Credit Hour Remaining: {creditHourRemaining}hr</h2>
                <hr />
                <ol>
                    <h1 className="text-xl font-bold mt-3 mb-4">Course Name</h1>
                    {bookmarkedCourses.map((course, index) => (
                        <li key={index}>{`${index + 1}. ${course.course_name}`}</li>
                    ))}
                </ol>

                <hr className='mt-5' />


                <h2 className="text-xl font-bold mt-4 text-zinc-600 mb-4">Total Credit Hour: {totalCreditHours}</h2>


                <hr className="mt-3" />
                <h1 className="text-sm font-bold text-zinc-600 mt-4">Total Price: {totalPrice} </h1>
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarkedCourses: PropTypes.object.isRequired,
    totalCreditHours: PropTypes.object.isRequired,
    creditHourRemaining: PropTypes.object.isRequired,
    totalPrice: PropTypes.object.isRequired,
};
export default Bookmarks;
