<h1 align="center">
    <a>🔗 Fullstack Test to myTapp </a>
</h1>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#pre-requisites">Pre requisites</a> •
  <a href="#running">Running</a> • 
  <a href="#routes"> Routes </a>  •  
  <a href="#technologies">Technologies</a> •
  <a href="#author">Author</a>
</p>

### Features

- [x] Create structure to config Postgress and Sequelize and create Database
- [x] Create CRUD to users
- [x] Create front-end with Vue.js and Quasar
- [x] Login, Register and Forgot my password screen
- [x] Layout, home, beers screen
- [x] Create middlewares with JSONWEBTOKEN to access API.

### Pre requisites

Before starting, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/)

### Running

```bash
# Clone this repo
$ git clone https://github.com/Lavarda/full-stack-test

# Access the dir of project
$ cd full-stack-test

# Go to SRC paste
$ cd src

# Run the application
$ npm run dev

# The server will start in port:3000 - access <http://localhost:3333>
```

### Routes

* **URL**

  `/users`

* **Method**

  `post`

* **Params**

  ```json
    {
      "name": "Your name",
      "email": "email@email.com",
      "password": "password"
    }
  ```

* **Return**

  **Status Code:** 201

    ```json
      {
        "status": 201,
        "message": "User created successfully"
      }
    ``` 
-----

* **URL**

  `/users/list`

* **Method**

  `get`

* **Params**
  
  Sending Authorization in header with your token.

  * **Return**

    **Status Code:** 201

      ```json
    {
    "status": 200,
    "data": [
      {
      "id": "83df163c-3b53-424d-afef-0772dff1c063",
      "name": "Example",
      "email": "example@gmail.com",
      "password": "$2b$12$X5b2yqHrzJoEd8C4z3cYweL2SJBHiq3ziPYYzrEliFGtgtJ/V5pP6",
      "created_at": "2022-01-21T18:59:29.982Z",
      "updated_at": "2022-01-21T21:59:29.982Z"
      }
    ]
    }
      ``` 
-----

* **URL**

  `/users/:id/edit`

* **Method**

  `patch`

  * **Params**

    Sending Authorization in header with your token.

    ```json
      {
        "name": "name you wanna change"
      }
  ```

  * **Return**

    **Status Code:** 201

      ```json
        {
            "status": 200,
            "message": "User edited successfully"
       }
      ``` 
-----
* **URL**

  `/users/delete/:id`

* **Method**

  `delete`

  * **Params**

    Sending Authorization in header with your token.
    Sending ID of the user you want to delete.

  * **Return**

    **Status Code:** 201

      ```json
        {
            "status": 200,
            "message": "User deleted successfully"
       }
      ``` 
-----
* **URL**

`/login`

* **Method**

  `post`

  * **Params**

    ```json
        {
          "email": "email@email.com",
          "password": "password"
        } 
    ```

  * **Return**

    **Status Code:** 201

      ```json
        {
            "status": 200,
            "data": {
              "id": "1855a1b1-dc13-449a-8d87-a16acea365e4",
              "name": "name",
              "email": "email@gmail.com",
              "password": "$2b$12$.lLMwMzuh33F4AUaZzKdwu8cSj2.fp/u0tV.ot3QAp0CaAdqdZCBK",
              "created_at": "2022-01-22T15:15:32.550Z",
              "updated_at": "2022-01-22T18:15:32.550Z",
              "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpdG9yQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzIiwiaWF0IjoxNjQyODcwMjgzfQ.sBt_1uX1NAdnN14wbXYyGHBfokf6pEl2zcqCyoGhw5Q"
          }
       }
      ``` 
-----
* **URL**

`/beers`

* **Method**

  `get`

* **Params**

  Sending Authorization in header with your token.

  * **Return**

    **Status Code:** 201

    ![img.png](img.png)
-----

* **URL**

`/beer/:id`

* **Method**

  `get`

* **Params**

  Sending Authorization in header with your token.
  ID of beer you want to see

  * **Return**

    **Status Code:** 201

    ![img_1.png](img_1.png)
-----

### Technologies

The following tools were used in building the project:

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org//)
- [Sequelize](https://sequelize.org)
- [Express](https://expressjs.com/pt-br/)

### Author
---

<a href="github/Lavarda">
 <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/43797265?s=400&u=e5b9bba154f27fb5572e5cf747dbb57d3ca923e6&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Vitor Lavarda</b></sub>
</a> 

By Vitor Lavarda

[![Linkedin Badge](https://img.shields.io/badge/-Vitor-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vitor-lavarda-00a776177/)](https://www.linkedin.com/in/vitor-lavarda-00a776177/)
[![Gmail Badge](https://img.shields.io/badge/-vitorlavarda.souza@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:vitorlavarda.souza@gmail.com)](mailto:vitorlavarda.souza@gmail.com)
