# Sample Task Management Application using Angular 4
***
### Project Configuration:
 
 - Clone or Download the project. 
 - cd AngularProject
 - npm install
 - ng serve --open
 - Configuration of Laravel API Project is necessary to run the project.
   (https://github.com/UbaidUrRehmanKhan/Laravel_APIs_for_AngularProject.git)
 
 > **NOTE :** 
> - As same component is used at different places, so their description will vary depending upon the data is provided from backend.
> - Laravel APIs name is different from what is wirtten actually on backend, so to build a clear understanding over here, I have used a descriptive sort of naming convention for APIs.
> - I have discussed each and every page, components which are used in it and the backend Laravel API calls.

 
### Project Brief Description: 
This project is all about creating various tasks and assigning those tasks to users. Admin will be responsible to Perform CRUD related operations for users and tasks. He will also be responsible to assign/deassign task to user and view the user's feedback for that task. On the other hand, user will be responsible to update the task status, add the feedback and delete the feedbacks.

[Following is the detail description of project:][df1]
# User Panel

### 1- Assigned Tasks Listing Page
**Description**: This is the starter page after successful login for a simple user and it is used to display the list of all tasks that are assigned to the user.

[Following Attributes will be shown:][df1]
- Task ID
- Task Name
- Task Status (Completed/Ongoing)
- Task Detail Link

[Following Backend Laravel API is used: ][df1]
- GetUserTasks()

### 2- Assigned Task Detail Page
**Description**: It is used to display the details among one of the tasks that are assigned to the user and the button to update the status of task to be completed. It has also the option to give feedback and viewing all the previously added feedbacks. 

[Following components with their attributes and widgets are as follows:][df1]
- Task Detail Component
  - Task ID
  - Task Name
  - Task Description
  - Mark as Completed Button
- Feedback box component
    - Feedback Description
- List of Feedbacks
    - Feedback Description 
    - Created At
    - Delete Comment Button

[Following Backend Laravel APIs are used:][df1]
- GetTaskDetail()
- NewFeedback()
- FeedbackLists()
- DeleteFeedback()
- UpdateTaskStatus()


# Admin Panel

### 1- Users Listing Page
**Description**: It is used to display the list of all users and the option to change the status of users. This page also contains 'Add New User' Button.

[Following components with their attributes and widgets are as follows:][df1]
- Users List Component
  - User ID
  - User Name
  - User Status Button (Active/Inactive)
  - User Detail Link
- New User Button

[Following Backend Laravel APIs are used: ][df1]
- GetUsersList()
- changeUserStatus()


### 2- Adding New User Page (Edit User Page)
**Description**: This page is used to save a new user and it is also used to update the datials of a user, if we come from a different route with query parameters.

[Following attributes will be used:][df1]
- User ID (for updating)
- User Name
- User Status 
- User Role
- User Email
- User Password (for updating)

[Following Backend Laravel APIs are used: ][df1]
- GetUserDetail()
- saveNewUser()
- updateExistingUser()

### 3- User Detail Page
**Description**: It is used to display the details of a user and the button to update the user data (This button leads to new user Page with the user ID in query Parameter. We have just recently discussed it). It has the table of all assigned tasks to the user with a link in every row of table to display the details with user progress to that task and a remove button to detach that task from user.

[Following components with their attributes and widgets are as follows:][df1]
- User Detail Component
  - User ID 
  - User Name
  - User Status 
  - User Role
  - User Email
- Tasks List Component 
  - Task ID
  - Task Name
  - Assigned Task Details Link
  - Task Remove Button (to detach the task from user)

[Following Backend Laravel APIs are used: ][df1]
- GetUserDetail()
- GetTasksList()
- TaskDetachmentFromUser()

### 4- Assigned Task Detail Page
**Description**: It is used to display the details among one of the tasks that are assigned to the user with delete and edit buttons. It has also the option of viewing all the previously feedbacks. 

[Following components with their attributes and widgets are as follows:][df1]
- Task Detail Component
  - Task ID
  - Task Name
  - Task Description
  - Mark as Completed Button
- List of Feedbacks
    - Feedback Description 
    - Created At

[Following Backend Laravel APIs are used: ][df1]
- GetTaskDetail()
- FeedbackLists()
- DeleteTask()

**NOTE :** Keeping in mind the perspective of SPA, I have introduced the options of task delete and task update in this page.


### 5- Tasks Listing Page
**Description**: It is used to display the list of all tasks of application. This page also contains 'Add New Task' Button.

[Following components with their attributes and widgets are as follows:][df1]
- Tasks List Component
  - Task ID
  - Task Name
  - Task Detail Link
- New Task Button

[Following Backend Laravel API is used: ][df1]
- GetTasksList()

### 6- Adding New Task Page (Edit Task Page)
**Description**: This page is used to create a new task and it is also used to update the datials of a task, if we come from a different route with query parameters.

[Following attributes will be used:][df1]
- Task ID (for updating)
- Task Name
- Task Description

[Following Backend Laravel APIs are used: ][df1]
- GetTaskDetail()
- saveNewTask()
- updateExistingTaskr()


### 7- Task Detail Page
**Description**: It is used to display the details of a task and the button to update the task data (This button leads to create task Page with the user ID in query Parameter. We have just recently discussed it). It has the list of all users from which we can select the required users and assign this task to them. 

[Following components with their attributes and widgets are as follows:][df1]
- Task Detail Component
  - Task ID 
  - Task Name
  - Task Description
  - Task Removal Button
  - Task Updation Button
- Tasks Assigning to Users Component 
  - Task ID
  - User ID (array of User IDs)
  - Assigned Task Button

[Following Backend Laravel APIs are used: ][df1]
- GetTaskDetail()
- deleteTask()
- getUsersList()
- AssigningTaskToUsers()




[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>

 
 






















