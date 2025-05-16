# 🍎 FruitStore API Journey Guide

Welcome to the FruitStore Public API! This guide will walk you through how to interact with the API step-by-step—from exploring fruits to making your first purchase.

## 🛠 Base URL

```
https://api.fruitstore.com/v1
```

---

## 1. 🔍 List All Fruits

**Endpoint:**
```
GET /fruits
```

**Description:**
Fetches a list of all available fruits in the store.

**Example Response:**
```json
[
  {
    "id": "apple001",
    "name": "Apple",
    "price": 1.25,
    "inStock": true
  },
  {
    "id": "banana002",
    "name": "Banana",
    "price": 0.75,
    "inStock": false
  }
]
```

---

## 2. 📄 Get Details of a Specific Fruit

**Endpoint:**
```
GET /fruits/{fruitId}
```

**Description:**
Returns the details of a fruit by its ID.

**Path Parameter:**
- `fruitId`: The ID of the fruit (e.g., `apple001`)

**Example:**
```
GET /fruits/apple001
```

**Example Response:**
```json
{
  "id": "apple001",
  "name": "Apple",
  "price": 1.25,
  "inStock": true
}
```

---

## 3. ➕ Add a New Fruit (Admin Only)

**Endpoint:**
```
POST /fruits
```

**Description:**
Creates a new fruit in the catalog (admin use only).

**Request Body:**
```json
{
  "name": "Orange",
  "price": 0.99,
  "inStock": true
}
```

**Response:**
```json
{
  "id": "orange003",
  "name": "Orange",
  "price": 0.99,
  "inStock": true
}
```

---

## 4. 🛒 Purchase a Fruit

**Endpoint:**
```
POST /purchase
```

**Description:**
Submits a purchase order for a specific fruit.

**Request Body:**
```json
{
  "fruitId": "apple001",
  "quantity": 2
}
```

**Example Response:**
```json
{
  "success": true,
  "message": "Order placed successfully",
  "orderId": "order1234"
}
```

---

## 🧾 Summary

| Action           | Method | Endpoint           |
|------------------|--------|--------------------|
| List fruits      | GET    | /fruits            |
| Get fruit        | GET    | /fruits/{fruitId}  |
| Add fruit        | POST   | /fruits            |
| Purchase fruit   | POST   | /purchase          |

---

## 📬 Support

If you have any issues or questions, please contact: [support@fruitstore.com](mailto:support@fruitstore.com)

Happy Fruiting! 🍇🍌🍍
