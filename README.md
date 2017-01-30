# REST API

####List of basic routes:

| Route          | HTTP   | Description  |
| ----------     |:------:|-------------:|
| /api/users     | GET     | Get all the users |
| /api/users/:id | GET     | Get a single user |
| /api/users     | POST    | Create a user |
| /api/users/:id | DELETE  | Get all the users |
| /api/users/:id | PUT     | Get all the users |
| /api/users/:id | PATCH   | Get all the users |

#### List of filter routes:

| Route          | HTTP   | Description  |
| ----------     |:------:|-------------:|
| /api/users?name="{name}"    | GET     | Get {name} match in users |
| /api/users?name="{na}" | GET     | Get {na} like in users |

## Usage
#### With only npm:

```
npm install
npm start
npm run dev
```
####Access the website via ```http://localhost:3000``` or API via ```http://localhost:3000/api```.
