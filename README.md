[Click here](https://6503a866974ccb30da14acd7--frolicking-hamster-6137e6.netlify.app/) to visit the live link.

 # Question-1:Add at least 3 Project features.

    Here are three project feature ideas:

    1.User Authentication and Profiles:
     Implement user authentication so that users can create accounts and log in. Each user can have a profile where they can track their selected courses, view their total credits, and see their bookmarked courses. This feature would allow multiple users to use the application and have their own personalized experience.

    2.Course Reviews and Ratings:
     Allow users to leave reviews and ratings for courses they have taken. This can help other users make informed decisions when selecting courses. Implement a rating system (e.g., stars) and allow users to write text reviews. Display the average rating and individual reviews on the course cards.

    3.Search and Filtering Options:
     Enhance the search functionality by adding filtering options. Users can filter courses by price, credit hours, category, or other relevant criteria. Implement a search bar with auto-suggestions to help users find courses quickly. Provide sorting options like "Most Popular," "Newest," or "Highest Rated."


 # Question-2.In the assignment project you provided, state management is achieved using the useState hook, which is a fundamental part of React. 

  Here's how state is managed in different aspects of my project:

 1.Bookmarked Courses and Total Price:

     1.The bookmarkedCourses state is used to keep track of the courses that the user has added to their bookmarks. It is initialized as an empty array using useState.

     2.The setBookmarkedCourses function is used to update this state whenever a user adds or removes a course from their bookmarks. It does so by creating a new array with the updated courses.

     3.The totalPrice state is used to calculate and display the total price of all bookmarked courses. It is also initialized as 0 using useState, and it's updated whenever a course is added or removed from bookmarks.


  Selected Course Names:

    1.The selectedCourseNames state is used to keep track of the names of courses that have been selected. It is initialized as an empty array using useState.

    2.Whenever a course is selected, its name is added to this state using the setSelectedCourseNames function. This helps prevent selecting the same course multiple times.

  Credit Hour Calculation:

    1.The total credit hours are calculated based on the courses in the bookmarkedCourses array. The totalCreditHours state is computed by using the reduce function to sum the credit hours of all bookmarked courses.

    2.The remaining credit hours are calculated as 20 - totalCreditHours. This value is stored in the creditHourRemaining state and used to determine if a course can be selected based on the available credit hours.

 Select Button Message:

    1.The selectButtonMessage state is used to display alert messages to the user when certain conditions are met (e.g., course is already selected, exceeds remaining credit hours, etc.).
    2.When a condition is met, the setSelectButtonMessage function is called to set the appropriate message, and it's displayed in the UI.

Overall, state management in this project is used to keep track of various aspects of the application, such as selected courses, credit hours, and alert messages. The useState hook is a key tool for managing and updating these states in a React application, ensuring that the UI reflects the current state of the application accurately.

