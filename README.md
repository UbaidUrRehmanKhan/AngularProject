Sample Task Management Application using Angular 4:  
	      
Basic App Structure:

1-  Auth component:
Login component: To handle the login functionality with the help of security service which is responsible to authenticate the data from Laravel API and accordingly renders the dashboard depending upon the type of user. 
Register Component: To register the user by admin ( doesn’t implement its functionality yet)
Model Classes: It also contains model classes for security object. 

2-  Dashboard Component: 
Admin Dashboard Component: To render the functionality required by Admin
User Dashboard Component: To render the functionality required by User
Dashboard Directive: It is used to render the required dashboard among two(Admin & User) depending upon the type of logged-in user. 

3- Header Component: To render the header and relevant navs for user and admin. 

4- Home Component: It contains the starter page of application (doesn’t contain any sort of functionality yet)

5- Security Component: It contains auth guard, admin guard and security service (will discuss shortly)

6- Tasks Component: This component will further contain some other components that will assist in task manipulation. (doesn’t implement its functionality yet)
	
7- Users Component: This component will also further contain some other components that will assist in user manipulation and task assignment to user. 
(doesn’t implement its functionality yet, but 	currently working on users list displaying with editing and active/ inactive mode for user)

-----------------------------------------------------------------------------------

Target 1: User Authentication and Authorization with Security Service

1-We have a security service in Security component. 
2-It is actually responsible to authenticate the users while login-in and give them authority depending upon the type of user role. 
3-We extract the token from DB and push it to local storage so next time, when page refreshes or new tab is open then data will remain persist instead of loosing the session. 
4-Data is properly fetched  asynchronously via observers. 
5-JWT helper classes are used to track token. 




