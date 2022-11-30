# libraryPageTurners
### Welcome to Page Turners - a small community library
URL: https://librarypageturners-production.up.railway.app/

### Overview of the site
**Large** (desktop) view:

<img width="1406" alt="overview-1" src="https://user-images.githubusercontent.com/115961145/204701311-8d551d5a-ca96-4c0e-8d57-08c6dacaa6f2.png">


**Medium** (some tablets) screen view:

<img width="620" alt="overview-2" src="https://user-images.githubusercontent.com/115961145/204701391-990b7b19-f1a3-4518-97d3-21db138a3cb2.png">


**Small** screen (phones) view:

<img width="501" alt="overview-3" src="https://user-images.githubusercontent.com/115961145/204701525-89a93711-2def-4d44-8c6b-c09e64f3a90a.png">

Original wireframe:
<img width="893" alt="PageTurners-Wireframe" src="https://user-images.githubusercontent.com/115961145/204710383-2cf01c52-bc99-4af0-9f64-61a661a1c99d.png">


### List of technologies used

This app is built on the MEN stack and has full CRUD capabilities for 2 models.
1. Front end: HTML, EJS, CSS, Bootstrap
2. Back end: NodeJS, Mongoose
3. Database: MongoDB

The **file structure** is based on MVC - Models, Views, Controllers plus a Public folder for static files.

Models:
1. Books
2. Magazines
3. Index and seed files

Views:
1. index.ejs: home page
2. newBook.ejs and newMagazine.ejs
3. showBook.ejs and showMagazine.ejs
4. editBook.ejs and editMagazine.ejs

Controllers:
1. Books
2. Magazines

Public:
1. Images folder with all relevant images
2. Styles folder with main.css for styling all pages

Server.JS - starting point


### Table of Routes

**Book Model**

    |       **URL**      | **HTTP Verb** | **REST Action** | **CRUD Action** |   **EJS View**   |
    | ------------------ | ------------- | --------------- | --------------- | ---------------- |
    | /                  | GET           | index           | read            | index.ejs        |
    | /book/:id          | GET           | show            | read            | showBook.ejs     |
    | /new               | GET           | new             | read            | newBook.ejs      |
    | /                  | POST          | create          | create          |                  |
    | /book/:id/edit     | GET           | edit            | read            | editBook.ejs     |
    | /book/:id          | PATCH/PUT     | update          | update          |                  |
    | /book/:id          | DELETE        | destroy         | delete          |                  |


**Magazine Model**

    |       **URL**      | **HTTP Verb** | **REST Action** | **CRUD Action** |   **EJS View**   |
    | ------------------ | ------------- | --------------- | --------------- | ---------------- |
    | /                  | GET           | index           | read            | index.ejs        |
    | /magazine/:id      | GET           | show            | read            | showMagazine.ejs |
    | /new               | GET           | new             | read            | newMagazine.ejs  |
    | /                  | POST          | create          | create          |                  |
    | /magazine/:id/edit | GET           | edit            | read            | editMagazine.ejs |
    | /magazine/:id      | PATCH/PUT     | update          | update          |                  |
    | /magazine/:id      | DELETE        | destroy         | delete          |                  |



### Installation:

The site is hosted on Railway app with the database in MongoDB Atlas and can be accessed at the following URL: https://librarypageturners-production.up.railway.app/


### User Stories
1. As a library patron, I want to be able to see all the books and magazines that are available in the library as soon as I go to the home page so I can make my selection (MVP) - _complete_
2. As a library patron, I want to see the details of a particular book or magazine so I can decide if this is one of the items I select (MVP) - _complete_
3. As a library patron, I want to be able to search for a particular book or magazine from the search bar (STRETCH) - _Not done_
4. As a library patron, I want to be able to checkout a particular book or magazine (STRETCH) - _complete_
5. As a librarian, I want to be able to add in new books or magazines into the database so that patrons can view the list of all available titles - _complete_
6. As a librarian, I want to be able to edit existing books or magazines for any mistakes or if they are out of circulation - _complete_
7. As a librarian, I want to be able to remove any existing books or magazines that are no longer available in the library. - _complete_


### MVP Goals 
The PAGE TURNERS library site does have the following :
- Home page with all latest titles (in Books and Magazine categories)
- Product detail page with Title, Author, Year Published, etc for Books and Magazines
- Ability to add a new book or magazine into the library
- Ability to edit information pertaining to new book or magazine in the library
- Ability to delete a book or magazine from the library

### Stretch Goals
The following were my stretch goals : 

- Ability to checkout a book or magazine by a patron of the library : This is now a feature of the site
- Carousel on home page to show latest titles added: I did not add this as my design idea changed after implementing Bootstrap
- Search bar to search for specific book or magazine : Did not add due to lack of time

