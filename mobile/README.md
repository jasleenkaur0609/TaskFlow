# TaskFlow Mobile 📱

TaskFlow Mobile is the React Native mobile application for **TaskFlow**, a full-stack task management platform designed to help users organize, prioritize, and track their daily tasks.

The mobile application is being developed using **React Native, Expo, Expo Router, and TypeScript**. It will communicate with the TaskFlow backend through REST APIs for authentication, task management, user profiles, and productivity data.

> 🚧 **Status: In Development**

---

## 📌 About TaskFlow

TaskFlow is a productivity and task management application that provides users with a simple and focused way to manage their daily tasks.

The mobile application will allow users to:

- Create and manage tasks
- Set priorities
- Add categories
- Set due dates
- Track task completion
- Search and filter tasks
- View productivity statistics
- Manage their profile
- Securely authenticate with their account

The project is being developed incrementally, starting with the mobile application foundation and navigation, followed by authentication, task management, backend integration, database integration, and production features.

---

## ✨ Current Features

The current mobile application includes:

- React Native project setup
- Expo configuration
- TypeScript
- Expo Router
- File-based navigation
- Splash screen
- Onboarding screens
- Login screen
- Registration route
- Responsive mobile layouts
- iPhone testing using Expo Go

---

## 🚀 Planned Features

### 🔐 Authentication

- User registration
- User login
- Secure password handling
- JWT-based authentication
- Persistent authentication
- Logout
- Protected routes
- Form validation
- Authentication error handling
- Forgot password functionality

### ✅ Task Management

- Create tasks
- Edit tasks
- Delete tasks
- Mark tasks as completed
- Reopen completed tasks
- Set task priorities
- Add task categories
- Add task descriptions
- Set due dates
- View task details

### 🔎 Search & Filtering

- Search tasks by title
- Filter by category
- Filter by priority
- Filter by status
- Filter by due date
- Sort tasks
- Search and filter results

### 📊 Dashboard

The dashboard will provide an overview of the user's productivity, including:

- Total tasks
- Pending tasks
- Completed tasks
- High-priority tasks
- Tasks due today
- Upcoming tasks
- Overdue tasks
- Completion statistics

### 👤 Profile

Planned profile functionality includes:

- View profile
- Update profile
- Account settings
- Logout
- Authentication management

---

# 🛠️ Tech Stack

## Frontend

| Technology | Purpose |
|---|---|
| React Native | Mobile application development |
| Expo | React Native development platform |
| Expo Router | File-based navigation |
| TypeScript | Type-safe development |
| Axios | REST API communication |
| AsyncStorage | Local data and authentication persistence |

## Backend

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime |
| Express.js | REST API framework |
| JWT | Authentication |
| bcrypt | Password hashing |

## Database

| Technology | Purpose |
|---|---|
| MongoDB | Application data storage |

## Development Tools

| Tool | Purpose |
|---|---|
| Visual Studio Code | Development |
| npm | Package management |
| Git | Version control |
| GitHub | Source code hosting |
| Expo Go | Mobile testing |

---

# 🏗️ Application Architecture

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