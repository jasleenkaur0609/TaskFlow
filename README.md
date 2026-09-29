# TaskFlow

<p align="center">
  <strong>A modern full-stack task management application</strong>
</p>

<p align="center">
  Organize your tasks, manage priorities, track deadlines, and stay productive.
</p>

---

## 📌 About The Project

**TaskFlow** is a full-stack task management application designed to help users organize and manage their daily tasks from a clean and focused interface.

The application is being developed using **React Native and Expo** for the mobile frontend, with a **Node.js and Express.js** backend and **MongoDB** for data persistence.

The project focuses on building a practical, real-world application while following modern development practices such as:

- Component-based architecture
- File-based mobile navigation
- RESTful API design
- Authentication and authorization
- Secure password handling
- Database-driven task management
- API integration
- Persistent authentication
- Reusable UI components
- Clean project structure
- Git and GitHub version control

TaskFlow is being developed incrementally, starting with the mobile application foundation and progressing toward a complete full-stack productivity application.

---

# ✨ Features

## 🔐 Authentication

TaskFlow will provide a complete authentication system including:

- User registration
- User login
- Secure password hashing
- JWT-based authentication
- Persistent authentication
- Logout
- Protected application routes
- Form validation
- Authentication error handling

---

## ✅ Task Management

Users will be able to:

- Create tasks
- Edit tasks
- Delete tasks
- Mark tasks as completed
- Mark tasks as pending
- Set task priorities
- Add categories
- Add descriptions
- Set due dates
- View task details
- Track task status

---

## 🔎 Search & Filtering

TaskFlow will allow users to quickly find and organize their tasks using:

- Task search
- Category filtering
- Priority filtering
- Completion status filtering
- Due-date filtering
- Task sorting

---

## 📊 Dashboard

The TaskFlow dashboard will provide an overview of the user's productivity.

Planned dashboard information includes:

- Total tasks
- Pending tasks
- Completed tasks
- High-priority tasks
- Upcoming tasks
- Overdue tasks
- Task completion statistics

---

## 👤 User Profile

Users will be able to manage their account through a dedicated profile section.

Planned functionality includes:

- View profile
- Update profile information
- Account settings
- Logout
- Authentication management

---

# 🛠️ Tech Stack

## Frontend

| Technology | Purpose |
|------------|---------|
| React Native | Mobile application development |
| Expo | React Native development platform |
| Expo Router | File-based navigation |
| TypeScript | Type-safe application development |
| Axios | API communication |
| AsyncStorage | Local data and authentication persistence |

---

## Backend

| Technology | Purpose |
|------------|---------|
| Node.js | Backend runtime |
| Express.js | REST API framework |
| JWT | Authentication |
| bcrypt | Password hashing |

---

## Database

| Technology | Purpose |
|------------|---------|
| MongoDB | User and task data storage |

---

## Development Tools

| Tool | Purpose |
|------|---------|
| Visual Studio Code | Development |
| Git | Version control |
| GitHub | Source code hosting |
| Expo Go | Mobile testing |
| npm | Package management |

---

# 🏗️ Application Architecture

The overall TaskFlow architecture is planned as follows:

```text
                    ┌─────────────────────┐
                    │      TaskFlow       │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Native App  │
                    │        + Expo       │
                    └──────────┬──────────┘
                               │
                               │ Axios
                               │ HTTP Requests
                               ▼
                    ┌─────────────────────┐
                    │   Node.js + Express │
                    │      REST API       │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │       MongoDB       │
                    │      Database       │
                    └─────────────────────┘