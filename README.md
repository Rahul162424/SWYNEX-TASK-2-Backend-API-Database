# 🛒 GroceryGo – Backend API & Database

GroceryGo is a backend REST API for a grocery management application. It provides CRUD operations for managing grocery products, along with database integration and request validation.

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Joi (Request Validation)
- Postman (API Testing)

## 📁 Project Structure

```text
GroceryGo/
├── middleware/
│   └── validateProduct.js
├── models/
│   └── product.js
├── routes/
│   └── productRoutes.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## ⚙️ Features

- Create new grocery products.
- Retrieve all products.
- Retrieve a product by ID.
- Update existing product details.
- Delete products.
- Validate incoming request data.
- Handle invalid input with appropriate error responses.
- Store product information in MongoDB.

## 🔗 API Endpoints

Base URL: `http://localhost:5000/api/products`

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/products | Add a product |
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get product by ID |
| PUT | /api/products/:id | Update a product |
| DELETE | /api/products/:id | Delete a product |

## 📦 Product Data Example

```json
{
  "name": "Amul Milk",
  "description": "Fresh toned milk 1 litre",
  "price": 72,
  "category": "Dairy",
  "stock": 100
}
```

## 🛠️ Installation & Setup

1. Clone the repository.

```bash
git clone https://github.com/Rahul162424/SWYNEX-TASK-2-Backend-API-Database
```

2. Navigate to the project directory.

```bash
cd GroceryGo
```

3. Install dependencies.

```bash
npm install
```

4. Configure your environment variables in `.env`.

5. Start the server.

```bash
node server.js
```

The server runs on port 5000.

## 🧪 API Testing

All CRUD operations were tested using Postman.

Tested operations:

- POST – Product creation
- GET – Fetch all products
- GET by ID – Fetch individual product
- PUT – Update product details
- DELETE – Remove a product
- Validation – Empty name, negative price and negative stock

## 🔒 Security

- Environment variables are stored in `.env`.
- Sensitive configuration files are excluded using `.gitignore`.
- Request data is validated before processing.

## 👨‍💻 Author

Rahul Chakravati

## 📌 Project

SWYNEX – Task 2: Backend API & Database Implementation