# crud-api
It contains all the files for the API built from scratch .
# CRUD API with Node.js, Express, and MongoDB

## ⚡️ Features
- ✅ REST endpoints for creating, reading, updating, and deleting items
- ✅ In‑memory database (`mongodb‑memory‑server`) for testing
- ✅ Unit, Integration, and API test coverage (~80–90%) using **Jest** and **Supertest**
- ✅ Clear error handling and status codes

---

## 🛠️ Tech Stack
- **Node.js**
- **Express**
- **MongoDB & Mongoose**
- **Jest** (Unit Testing)
- **Supertest** (API Testing)

---

## Steps To Follow

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Aahwaan115/crud-api.git
cd crud-api
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up the Database
Edit `start.js` with your **MongoDB URL**:
```javascript
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');
```

### 4️⃣ Run the Server
```bash
node start.js
```
The server will run at **http://localhost:5000**.

---

## 🧪 Testing
Run the test suite:
```bash
npm test
```

Tests cover:
- ✅ Unit Tests
- ✅ Integration Tests
- ✅ API Endpoint Tests

---

### ✅ Screenshot
```

![test_coverage](Images\test_coverage.png)

```

---

## 🌐 API Endpoints

| Method | Route            | Description                           |
|--------|------------------|---------------------------------------|
| POST   | `/items`         | Create a new item                    |
| GET    | `/items`         | Get all items                       |
| GET    | `/items/:id`     | Get a specific item by ID           |
| PUT    | `/items/:id`     | Update an item                      |
| DELETE | `/items/:id`     | Delete an item                      |

---

## ⚡️ Testing Frameworks/Tools
- **Jest** — Unit and Integration Testing
- **Supertest** — API Endpoint Testing
- **MongoMemoryServer** — In‑memory database for test isolation

---

## 🔥 Notes
> ⚡️ This project doesn’t have a **frontend** yet, but one will be added soon! Stay tuned.

---
