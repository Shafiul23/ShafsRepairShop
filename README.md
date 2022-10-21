# ShafsRepairShop

Hello! This project was created using the MERN stack (MongoDB, Express, React and Node). The aims of this project was to build a full stack application from scratch, so that I could implement all the skills that I have learned so far in my software engineering career. 

Shaf's repair shop deals with fixing technical issues for its clients. To do so, it used sticky notes to keep track of all the tickets that would come in, which would hold information like the employee responsible for the ticket, the problem that needs to be solved and the client it is serving. This came to be a very messy system, so the website "techNotes" was created. On this website, employees, managers and admins can log on to view, edit and create tech notes> The managers and admins can also view, edit and create users. 

The first step in creating this application was to build the database. This was done using MongoDB, a no SQL database that would allow the storage of users and notes. Next, Node.js and Express.js was used for the server-side code and the middleware, as well as assisting with the routing of the application. Once the backend was created, a combination of React and Redux was used to design the front end. These two JavaScript libraries helped with managing the state of the application as well as sending requests to the backend. 


### Built With

* [![Mongodb][Mongodb.com]][Mongodb-url]
* [![Express][Express.js]][Express-url]
* [![React][React.js]][React-url]
* [![Node][Node.js]][Node-url]
* [![Redux][Redux.js]][Redux-url]


## User Stories

1. [x] Replace current sticky note system 
2. [x] Add a public facing page with basic contact info
3. [x] Add an Employee login to the notes app 
4. [x] Provide a welcome page after login 
5. [x] Provide easy navigation 
6. [x] Display current user and assigned role 
7. [x] Provide a logout option 
8. [x] Require users to login at least once per week 
9. [x] Provide a way to remove user access asap if needed 
10. [x] Notes are assigned to specific users
11. [x] Notes have a ticket number, title, note body, created and update dates
12. [x] Notes are either open or completed 
13. [x] Users can be Employees, Managers, or Admins
14. [x] Notes can only be deleted by Managers or Admins
15. [x] Anyone can create a note (when customer checks-in)
16. [x] Employees can only view and edit their assigned notes
17. [x] Managers and Admins can view, edit and deleted all notes
18. [x] Only Managers and Admins can access user settings
19. [x] Only Managers and Admins can create new users
20. [x] Desktop mode is most important but should be available in mobile

## Installation

* Clone repo to local machine
* Open package.json in backend folder in integrated terminal and use `npm i`
* Contact owner for access to the MongoDB database, or create your own free database. Name the database techNotesDB, with two collections: 'users' and 'notes'.
* Create a .env file within the same repository of `server.js`. You'll need to input four variables. set `NODE_ENV=` to 'development' with no quotation marks. set `DATABASE_URI=` to the link that you receive from MongoDB, remembering to include the password to the database as well as the name of the database. Next, you'll need two unique strings. If you are using node.js,  type `node` into your terminal to open the node shell. After this, type `require('crypto').randomBytes(64).toString('hex')` and hit enter to create a unique string. Paste this into your .env file and assign it to a variable named `ACCESS_TOKEN_SECRET`. Repeat this step to create a unique string for another variable named `REFRESH_TOKEN_SECRET=`
* Once all packaged are installed, use `npm run dev` to start the backend. 
* Open frontend folder package.json in your terminal and type `npm i` followed by `npm run` once all packages are installed.

## Usage

![Login page](techNotesScreenshots/loginpage.png?raw=true)
_Login page. Here, employees may click Trust This Device to remain logged in for upto 7 days._ <br/><br/>
![Welcome page](techNotesScreenshots/welcomepage.png?raw=true)
_Welcome page. All employees may view and add techNotes, but only managers and admins can view and add users._ <br/><br/>
![Notes list](techNotesScreenshots/noteslist.png?raw=true)
_Notes list. Here, all tickets are available to see for admins. Completed notes occupy the bottom of the list. Employees can only see tickets that they are assigned to._ <br/><br/>
![Edit Notes](techNotesScreenshots/editnotes.png?raw=true)
_Edit note page. Employees can edit the title, text and completion status in the edit page. Attempting to change a note title into one that already exists will result in a duplication error._ <br/><br/>
![New Note](techNotesScreenshots/newnote.png?raw=true)
_New note. Employees can create new notes in this page and assign it to any member of Shaf's Repair Shop._<br/><br/>
![User list](techNotesScreenshots/userlist.png?raw=true)
_User list. Admins and managers are able to view all current members of Shaf's Repair Shop._<br/><br/>
![Edit user](techNotesScreenshots/edituser.png?raw=true)
_Edit user page. Admins and Managers are able to edit the username, password and active status of all employees._<br/><br/>
![New user](techNotesScreenshots/newuser.png?raw=true)
_New user page. Admins and Managers can create new users with the option to assign them with any role._<br/><br/>

## Contact 

Email - shafiulmirza@hotmail.com <br/>
GitHub - https://github.com/Shafiul23 <br/>
LinkedIn - www.linkedin.com/in/shafiul-mirza-32871b246


 <!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
[Mongodb.com]:https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[Mongodb-url]: https://www.mongodb.com/
[Redux.js]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/

## Acknowledgements

This project followed a guide by a YouTuber named, Dave Gray. 

https://www.youtube.com/watch?v=CvCiNeLnZ00&list=PL0Zuz27SZ-6P4dQUsoDatjEGpmBpcOW8V&index=14

Gray is able to communicate intermediate - difficult concepts within software engineering in a clear and concise manner. I highly recommend his channel for engineers who are looking to improve or brush up on their skills. 

### Potential improvements

If I were to revisit this project and invest some more time into it, I would implement testing for both the backend and the front end. Additionally, I could allow for drafts to be saved when creating a new note. 