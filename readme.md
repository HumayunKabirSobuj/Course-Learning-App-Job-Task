# 🎓 Course Learning App (LMS Backend)
A fully-featured and modular Learning Management System (LMS) backend built using Node.js, Express, TypeScript, and MongoDB. This system empowers seamless interaction between students and teachers through structured course creation, lesson planning, topic management, quizzes, and progress tracking.

It is designed to be scalable, maintainable, and secure, making it ideal for modern education platforms.

---

## 🚀 Features

### 👥 Authentication & User Roles

- Secure user registration and login
- Role-based access control: **Student** and **Teacher**

### 🎯 Teacher Capabilities

- Create, update, delete Courses, Lessons, Topics
- Add Quizzes to Topics
- View analytics: student engagement, likes, feedback
- Track student progress and quiz results

### 📚 Student Capabilities

- Enroll in and follow courses
- Like and provide feedback on courses
- Mark topics as completed (progress tracking)
- Attempt quizzes and view results
- Follow teachers

---

## 🧰 Tech Stack

| Layer          | Technology                     |
| -------------- | ------------------------------ |
| Backend        | Node.js, Express               |
| Language       | TypeScript                     |
| Database       | MongoDB, Mongoose              |
| Auth           | JWT                            |
| Error Handling | Custom global handler          |
| Others         | ESLint, Prettier, dotenv, CORS |

---

---

## ⚙️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/HumayunKabirSobuj/Spark_Tech_Job_Task.git
cd Spark_Tech_Job_Task

**Step - 2:** install the all packges
```

    npm install

```

**Step - 3:** Create a .env file on the root

**Step - 4:** put the below code in the env file and probide your own database creadentials



### 📦 Environment Variables

| Key                      | Description                                                   |
|--------------------------|---------------------------------------------------------------|
| `port`                   | Your application's port number.                               |
| `database_url`           | MongoDB connection URL.                                       |
| `bcrypt_salt_rounds`     | Number of salt rounds for bcrypt password hashing.            |
| `jwt_access_secret`      | Secret key for signing access tokens.                         |
| `jwt_refresh_secret`     | Secret key for signing refresh tokens.                        |
| `jwt_access_expires_in`  | Expiration time for access tokens .        |
| `jwt_refresh_expires_in` | Expiration time for refresh tokens .              |


**Step - 5:** use the below commend for run the application

```

    npm run dev


```

### Auth

| Method | Endpoint              | Description   |
| ------ | --------------------- | ------------- |
| POST   | `/api/auth/register` | Register user |
| POST   | `/api/auth/login`  | Login user    |


### Course API Endpoints

| Method | Endpoint             | Description                                | Access Role(s)   |
| ------ | -------------------- | ------------------------------------------ | ---------------- |
| POST   | `/api/course`     | Create a new course                        | Teacher          |
| GET    | `/api/course`     | Get all courses (with filter & pagination) | Public           |
| GET    | `/api/course/:id` | Get a single course by ID                  | Teacher, Student |
| PATCH  | `/api/course/:id` | Update a course by ID                      | Teacher          |
| DELETE | `/api/course/:id` | Delete a course by ID                      | Teacher          |

### Lesson API Endpoints

| Method | Endpoint             | Description               | Access Role(s)   |
| ------ | -------------------- | ------------------------- | ---------------- |
| POST   | `/api/lession`     | Create a new lesson       | Teacher          |
| GET    | `/api/lession`     | Get all lessons           | Teacher, Student |
| GET    | `/api/lession/:id` | Get a single lesson by ID | Teacher, Student |
| PATCH  | `/api/lession/:id` | Update a lesson by ID     | Teacher          |
| DELETE | `/api/lession/:id` | Delete a lesson by ID     | Teacher          |

### Topic API Endpoints

| Method | Endpoint            | Description              | Access Role(s)   |
| ------ | ------------------- | ------------------------ | ---------------- |
| POST   | `/api/topic`     | Create a new topic       | Teacher          |
| GET    | `/api/topic`     | Get all topics           | Teacher, Student |
| GET    | `/api/topic/:id` | Get a single topic by ID | Student          |
| PATCH  | `/api/topic/:id` | Update a topic by ID     | Teacher          |
| DELETE | `/api/topic/:id` | Delete a topic by ID     | Teacher          |


### Topic API Endpoints

| Method | Endpoint            | Description              | Access Role(s)   |
| ------ | ------------------- | ------------------------ | ---------------- |
| POST   | `/api/enrollment`   | Create a new Enrollment      | Student      |
| GET    | `/api/enrollment`     | Get all Enrollments           | Teacher |
| GET    | `/api/enrollment/my-enrollment` | Get Myself Enrollments | Student          |

