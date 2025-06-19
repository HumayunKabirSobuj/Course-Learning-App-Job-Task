# 🎓 Course Learning App (LMS Backend)

A robust and scalable Learning Management System (LMS) backend built with Node.js, Express, MongoDB, and TypeScript. This API connects students and teachers through structured courses, lessons, topics, quizzes, and performance tracking.

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
| Validation     | Zod                            |
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

```

port: Your port Number,
database_url: Your Database Url,
bcrypt_salt_rounds: bcrypt salt rounds number,
jwt_access_secret: JWT ACCESS SECRET,
jwt_refresh_secret: JWT Refresh secret,
jwt_access_expires_in: JWT access expire in,
jwt_refresh_expires_in: JWT access expire in,

```

**Step - 5:** use the below commend for run the application
```

    npm run dev

```

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

