import { useState } from 'react';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [bookmarkedCourses, setBookmarkedCourses] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCourseNames, setSelectedCourseNames] = useState([]);
  const [selectButtonMessage, setSelectButtonMessage] = useState('');

  const totalCreditHours = bookmarkedCourses.reduce(
    (total, course) => total + course.credit_hours,
    0
  );

  const creditHourRemaining = 20 - totalCreditHours;

  const handleAddToBookmark = (course) => {
    if (creditHourRemaining === 0 && totalCreditHours === 20) {
      toast('Cannot select this course. Total credit hours reached 20 and Credit Hour Remaining is 0.');
    } 
    
    else if (bookmarkedCourses.some((bookmarkedCourse) => bookmarkedCourse.course_id === course.course_id)) {
      toast(`Course "${course.course_name}" is already in bookmarks.`);
    } 
    
    else if (creditHourRemaining < course.credit_hours) {
      toast(`Cannot add "${course.course_name}" as it exceeds the remaining credit hours.`);
    } 
    
    else if (totalCreditHours === 20) {
      toast('Cannot add more courses. Total credit hours reached 20.');
    } 
    
    else if (creditHourRemaining === 0) {
      toast("Cannot select this course. Credit Hour Remaining is 0.");
    } 
    
    else {
      if (selectedCourseNames.includes(course.course_name)) {
        setSelectButtonMessage(`Course "${course.course_name}" has been selected again.`);
      } 
      
      else {
        const newBookmarkedCourses = [...bookmarkedCourses, course];
        setBookmarkedCourses(newBookmarkedCourses);

        const newTotalPrice = newBookmarkedCourses.reduce(
          (total, course) => total + course.price,
          0
        );
        setTotalPrice(newTotalPrice);

        setSelectedCourseNames([...selectedCourseNames, course.course_name]);

        setSelectButtonMessage('');
      }
    }
  };

  return (
    <>
      <Header />
      <div className="md:flex p-4">
        <Blogs handleAddToBookmark={handleAddToBookmark} />
        <Bookmarks
          bookmarkedCourses={bookmarkedCourses}
          totalCreditHours={totalCreditHours}
          creditHourRemaining={creditHourRemaining}
          totalPrice={totalPrice}
        />
      </div>
      {selectButtonMessage && <p className="select-button-message">{selectButtonMessage}</p>}
      <ToastContainer />
    </>
  );
}

export default App;
