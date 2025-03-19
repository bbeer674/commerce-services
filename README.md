ตัวอย่าง **README.md** สั้นๆ ชัดเจน สำหรับ RESTful API (ข้อ 1):

---

# RESTful API with Node.js & Express

RESTful API User Management

## Features:

- **Register**
- **View Profile**
- **Edit Profile**
- **Delete Account**
- **Change Password**

## Technology:

- Node.js
- Express.js

## Installation & Run:

```bash
npm install
npm run dev
```

## API Endpoints:

| Method | Endpoint               | Description          |
| ------ | ---------------------- | -------------------- |
| POST   | `/api/register`        | Register new user    |
| GET    | `/api/profile`         | Get user profile     |
| PUT    | `/api/profile`         | Edit user profile    |
| DELETE | `/api/profile`         | Delete user account  |
| PUT    | `/api/change-password` | Change user password |

## Authentication:

- Header `Authorization: Bearer faketoken_user1`

---
