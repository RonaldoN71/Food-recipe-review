# 🍽️ Food Recipe Review Backend

A backend for a Food Recipe Review application built with **Node.js**, **Express.js**, and **MongoDB**.  
It uses **Cloudinary** for image storage, **JWT** for authentication, **bcrypt** for password hashing, and **Nodemailer** for email notifications.
## 🚀 Features
- User authentication with JWT
- Secure password handling with bcrypt
- Image upload via Cloudinary
- Review system for recipes
- Email notifications with Nodemailer
- Input validation with Validator
- File upload handling using Multer
# Implementation Using Postman API
## Register
![Screenshot 2025-04-28 113402](https://github.com/user-attachments/assets/41a0ac67-d252-4c44-be26-038dc5ce5a88)
## Login
![Screenshot 2025-04-28 113925](https://github.com/user-attachments/assets/7649a46d-4652-404a-8ea0-37ee40a9c218)
## Create recipe
![Screenshot 2025-04-28 133839](https://github.com/user-attachments/assets/92f89f49-7382-4e11-bed3-8fe219921827)
## Get all recipe
![Screenshot 2025-04-29 090630](https://github.com/user-attachments/assets/60d71ddc-4f70-437c-9132-75759d4f312a)
## Get single recipe
![Screenshot 2025-04-29 090845](https://github.com/user-attachments/assets/660cdd31-f7e6-4340-9e73-acb44b04951c)
## Update recipe
![Screenshot 2025-04-29 092339](https://github.com/user-attachments/assets/51611980-2787-46f4-b7e2-cdd42d11a316)
## Delete recipe
![Screenshot 2025-04-29 092557](https://github.com/user-attachments/assets/f1e74d2d-b592-496f-888b-27b0f2f6ae29)
## Add review
![Screenshot 2025-04-28 140713](https://github.com/user-attachments/assets/0672a06a-4337-4244-9ea8-eed99cc10d5a)
## Get review
![Screenshot 2025-04-29 090102](https://github.com/user-attachments/assets/4e435821-fd76-40b2-924f-e87728659388)
## Delete review 
![Screenshot 2025-04-29 091553](https://github.com/user-attachments/assets/eef4ec56-7bf8-41ee-8103-1d5c46ce7ec9)

## 📋 API Endpoints

### 👤 User Authentication Routes (`/userauth/api`)

- `POST /register` — Register a new user
- `POST /login` — User login
- `POST /forgotpassword` — Initiate password reset
- `GET /forgotpassword/:id/:token` — Verify password reset link
- `PUT /resetpassword/:id/:token` — Reset password
- `GET /userloggedin` — Verify if user is logged in

---

### 🍽️ Recipe Routes (`/recipe/api`)

- `POST /create` — Create a new recipe
- `PATCH /updaterecipe/:recipeid` — Update a recipe
- `DELETE /deleterecipe/:recipeid` — Delete a recipe
- `GET /singleRecipe/:recipeid` — Get details of a single recipe
- `GET /recipeData` — Get all recipes

---

### 📝 Review Routes (`/review/api`)

- `POST /create/:recipeid` — Add a review to a recipe
- `GET /getreview/:recipeid` — Get all reviews for a recipe
- `DELETE /deletereview/:reviewid` — Delete a review

---

## ⚙️ Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- Cloudinary (for image uploads)
- JSON Web Tokens (JWT)
- Bcrypt.js (for password hashing)
- Multer (for file uploads)
- Nodemailer (for sending emails)
- Validator.js (for input validation)
- Postman (for API testing)

---
