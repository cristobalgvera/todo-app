# ✅ TODO APP

## 📝 Brief description

To-do basic app developed with Spring Boot and React.

## 🧑🏻‍💻 Local development

To run **backend** app you will need following technologies:

- Java 11+ _(<17)_
- Gradle 7.2+

To run **frontend** app you will need following technologies:

- Node 14+ _(<17)_

```bash
# Clone this repository
git clone https://github.com/cristobalgvera/todo-app.git

# Start backend server
cd server
gradle bootRun

# In another terminal instance
# open recently repository folder

# Start frontend server
cd client
yarn # or npm i
yarn start # or npm start
```

_☝🏻 You don't need any local database engine, Spring Boot will generate an H2 file based database automatically. To change this behavior **application.yml** file needs to be modified._

## Unit testing

In order to run **backend** tests, you will need to run the following commands:

```bash
# Inside repository folder

cd server
gradle test # To avoid in cache test use 'gradle clean test' instead
```

In order to run **frontend** tests, you will need to run the following commands:

```bash
# Inside repository folder

cd client
yarn test # or npm test
```

_☝🏻 Testing are applied just in service layer on backend, and just in atomic components on frontend._

## Swagger UI

When you run **backend** app, you are able to access Swagger UI from `http://localhost:8080/api/swagger-ui/`.

In there you can see information about classes validation and API endpoints documentation.

## 🗂 Folder structure

| Folder name | Use               |
| ----------- | ----------------- |
| server      | Backend project   |
| client      | Frontend project  |
| database    | SQL-related files |
