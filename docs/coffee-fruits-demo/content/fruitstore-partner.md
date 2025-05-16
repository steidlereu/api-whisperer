# 🤝 FruitStore Partner API Journey Guide

Welcome to the FruitStore Partner API. This guide provides an overview of the secured endpoints available to authenticated partners. With these APIs, partners can manage fruits, view inventory, and retrieve order data.

## 🔐 Authentication

All endpoints require a **Bearer Token** in the `Authorization` header.

```
Authorization: Bearer <your-token-here>
```

---

## 🧾 Base URL

```
https://partner-api.fruitstore.com/v1
```

---

## 1. 📦 List All Fruits

**Endpoint:**
```
GET /partner/fruits
```

**Description:**
Retrieve all fruits managed by the partner.

**Response Example:**
```json
[
  {
    "id": "apple001",
    "name": "Apple",
    "price": 1.25,
    "inStock": true
  }
]
```

---

## 2. ➕ Add a New Fruit

**Endpoint:**
```
POST /partner/fruits
```

**Request Body:**
```json
{
  "name": "Peach",
  "price": 1.50,
  "inStock": true
}
```

**Response:**
```json
{
  "id": "peach001",
  "name": "Peach",
  "price": 1.50,
  "inStock": true
}
```

---

## 3. ✏️ Update a Fruit

**Endpoint:**
```
PUT /partner/fruits/{fruitId}
```

**Path Parameter:**
- `fruitId`: ID of the fruit to update

**Request Body:**
```json
{
  "name": "Green Apple",
  "price": 1.30,
  "inStock": true
}
```

**Response:**
```json
{
  "id": "apple001",
  "name": "Green Apple",
  "price": 1.30,
  "inStock": true
}
```

---

## 4. ❌ Delete a Fruit

**Endpoint:**
```
DELETE /partner/fruits/{fruitId}
```

**Description:**
Deletes the fruit with the given ID.

**Response:** `204 No Content`

---

## 5. 📊 Get Inventory Status

**Endpoint:**
```
GET /partner/inventory
```

**Description:**
Fetches current stock levels for all fruits.

**Example Response:**
```json
[
  {
    "fruitId": "apple001",
    "currentStock": 134
  }
]
```

---

## 6. 📋 Get Order History

**Endpoint:**
```
GET /partner/orders
```

**Description:**
Returns a list of recent orders placed through the system.

**Example Response:**
```json
[
  {
    "orderId": "order1234",
    "fruitId": "apple001",
    "quantity": 3,
    "timestamp": "2025-05-01T12:34:56Z"
  }
]
```

---

## 🧭 Summary

| Action           | Method | Endpoint                    | Auth Required |
|------------------|--------|-----------------------------|----------------|
| List fruits      | GET    | /partner/fruits             | ✅             |
| Add fruit        | POST   | /partner/fruits             | ✅             |
| Update fruit     | PUT    | /partner/fruits/{fruitId}   | ✅             |
| Delete fruit     | DELETE | /partner/fruits/{fruitId}   | ✅             |
| Inventory status | GET    | /partner/inventory          | ✅             |
| Order history    | GET    | /partner/orders             | ✅             |

---

## 📬 Support

For integration help, contact: [partners@fruitstore.com](mailto:partners@fruitstore.com)

Thank you for partnering with FruitStore! 🍊
