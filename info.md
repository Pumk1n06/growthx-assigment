Register user : "http://localhost:5000/api/users/register"
```
{
  "name": "user1",
  "email": "user1@example.com",
  "password": "password123"
}
```

Login user : "http://localhost:5000/api/users/login"
```
{
  "email": "user1@example.com",
  "password": "password123"
}
```

Upload assignment : "http://localhost:5000/api/users/upload"
```
{
  "task": "Hello World",
  "adminId": "<admin-id>"
}
```

Register admin : "http://localhost:5000/api/users/register"
```
{
  "name": "admin1",
  "email": "admin1@example.com",
  "password": "adminpassword123",
  "role": "admin"
}
```

Get admin info : "http://localhost:5000/api/users/admins"

Upload assignment : "http://localhost:5000/api/users/upload"
```
{
  "task": "project_1",
  "adminId": "67095ad141fef7494644ad87"
  
}
```

Admin login : "http://localhost:5000/api/users/login"
```
{
  "email": "admin1@example.com",
  "password": "adminpassword123"
}
```

Get assignments : "http://localhost:5000/api/admins/assignments"


