[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/OuSBNpwM)

# Chef2go

Welcome to the Chef2go website repository.

### Project Description
Code2chef serves as a comprehensive online platform tailored specifically for students, functioning as a convenient one-stop shop for ordering food. The platform goes beyond mere food delivery, offering students exclusive deals and granting them access to premium experiences. One standout feature is the ability to explore a curated collection of chef-created recipes, providing a unique and enriching culinary experience. Whether students are looking for a quick meal or seeking inspiration for their own cooking endeavors, this platform is designed to cater to their diverse needs, making it a go-to destination for food enthusiasts on campus.

### Run Locally

Clone the project

```bash
  git clone https://github.com/info-6150-fall-2023/final-project-peri-peri
```

Go to the project directory

```bash
  use live-server extension on vs code
```
### Rest API for Recipe

Created REST API for Recipe management
GET /recipes
Retrieve a list of all recipes in the database.
POST /recipes
Create a new recipe in the database.
GET /recipes/{recipeId}
Retrieve details for a specific recipe identified by recipeId.
PUT /recipes/{recipeId}
Update an existing recipe identified by recipeId.
DELETE /recipes/{recipeId}
Delete a recipe identified by recipeId.

### User Authentication API
The API allows users to sign up, log in, and delete their accounts. Passwords are securely hashed using bcrypt, and token-based authentication is implemented for user sessions.

controllers: Contains the controller functions that handle HTTP requests and interact with the service layer.
models: Defines the MongoDB schema for the user and exports the user model.
services: Implements the business logic for user authentication and interacts with the MongoDB database using the user model.
utilities: Contains utility functions such as token generation.
routes: Defines the API routes using Express, routing HTTP requests to the corresponding controller functions.

API Endpoints:

POST /signup: Sign up a new user. Requires name, username, email, and password in the request body.
POST /login: Log in a user. Requires either username or email and password in the request body.
DELETE /:id: Delete a user by their ID. Requires the user ID as a parameter in the URL.

Error Handling:

Validation errors (e.g., empty fields, invalid email) return a 400 status code with an error message.
Unauthorized errors return a 401 status code with an "Unauthorized" message.
Internal server errors return a 500 status code with an "Internal Server Error" message.

Security:

User passwords are hashed using bcrypt for secure storage.
Token-based authentication is implemented for user sessions.


### Object Model

![alt text](https://github.com/info-6150-fall-2023/final-project-peri-peri/blob/main/docs/Food.png)

## Authors

- [@Basavaraj Patil](https://github.com/basupatil1213)
- [@Bhuvan Dama Venkatesh Raj](https://github.com/BhuvanDV)
- [@Keerthana Mikkili](https://github.com/keerthanamikkili)
- [@Shreyas Hanamantgouda Patil](https://github.com/shreyes-patil)
