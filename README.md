# Task Manager API

Task Manager API is a RESTful web service that allows users to manage their tasks. It provides endpoints for task creation, retrieval, modification, and removal.

## Features

- Create a new task
- Retrieve a single task by ID
- Retrieve all tasks
- Update a task
- Delete a task

## Getting Started

### Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (version 18.6.1)
- NPM (version 9.5.1)
- MongoDB (version 6.0.3)

### Installation

1. Clone the repository: `git clone https://github.com/your-username/task-manager-api.git`
2. Navigate to the project directory: `cd task-manager-api`
3. Install dependencies: `npm install`

### Configuration

1. Create a `.env` file in the root directory based on the `.env.example` provided.
2. Replace the environment variables in `.env` with your own configuration settings, such as MongoDB connection string, port number, etc.

### Running the Application

To start the application in development mode, run the following command:


The application will be accessible at `http://localhost:3000`.

## API Endpoints

- `GET /tasks`: Get a list of all tasks.
- `POST /tasks`: Create a new task.
- `GET /tasks/:id`: Get a single task by ID.
- `PATCH /tasks/:id`: Update a task by ID.
- `DELETE /tasks/:id`: Delete a task by ID.

### Request & Response Examples

You can use tools like Postman or cURL to interact with the API. Below are some example requests and responses:

#### GET /tasks

Request:


Response (200 OK):
```json
[
  {
    "_id": "task_id_1",
     "name": "Task 1",
     "completed": "true"
  },
  {
    "_id": "task_id_2",
     "name": "Task 2",
     "completed": "false"
  }
]
```
#### POST /tasks

Request:

```json
{
  "name": "New Task",
  "completed": "false"
}
```
#### Response (201 Created):

```json
{
  "_id": "new_task_id",
  "name": "New Task",
  "completed": "false"
}
```
#### GET /tasks/:id

Request:

#### Response (200 OK):
```json
{
  "_id": "task_id_1",
   "name": "New Task",
   "completed": "true"
}
```
#### PATCH /tasks/:id

Request:

```json
{
  "completed": "false"
}
```
#### Response (200 OK):

```json
{
  "_id": "task_id_1",
   "name": "Task 1",
   "completed": "false"
}
```
#### DELETE /tasks/:id

Request: 

Response (204 No Content):

## Technologies Used

- Node.js
- Express.js
- MongoDB
- dotenv (for environment variables)
- nodemon (for development)
- mongoose (for MongoDB modeling)
