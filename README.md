# General Questions' Answer

### Here are some features of this project -
* Dynamic data load from json file
* Dynamic cart data from user interaction. That means, course name, total credit hour, credit hour remaining, total price will be updated dynamically when user will select a course.
* There is a credit limit of 20. That means, user can select up to 20 credits' course. If he/she wants to add more course he/she can't do it. He/she will be notified.
* User can select a course once only. If he/she wants to add a course that exist in the cart, he can't do it. He/she will be notified.
* Notification will be shown in a toast. react-toastify used to show notification in this project.

### Here I am talking about how I managed the state in this project -
I used useState hook to store courses' data and used useEffect hook to load the data on UI.
I used useState hook to store courses in cart. When user clicks on Select button, I checked if the remaining credit hours more than the course credit hours. If it is, I updated useState data with existing courses and new course. If it is not, I showed an alert that course limit exceed. Also I checked if the course exist in the cart. If it is, I showed an alert that course already exist. If it is not, I updated useState data with existing courses and new course. I iterated cart data and calculated remaining credit, total credit, total price and course name and set it in cart UI every time when user clicks on Select button.