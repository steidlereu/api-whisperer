# Menu Item Management API - CoffeeShop

## Domain: Menu Management  
### Bounded Context: Menu Item Management

The **Menu Item Management API** enables coffee shop staff and systems to create, update, retrieve, and delete menu items. It supports categorization, seasonal availability, pricing, and tagging for efficient frontend display and POS integration.

---

## 📌 Purpose

To provide a centralized interface for managing:
- Menu item lifecycle (create, read, update, delete)
- Categorization (e.g., beverages, snacks)
- Availability toggles and seasonal flags
- Dynamic pricing and tagging

---

## 👤 Actors
- **Manager** – Maintains the menu catalog.
- **POS System** – Reads menu data for ordering.
- **Mobile App** – Displays up-to-date menu content.
- **Barista Display** – Shows available items for preparation.

---

## 🧭 API Journey

### 1. ➕ Add a Menu Item
**Use Case:** A manager introduces a new drink.

- **Endpoint:** `POST /api/menu/items`
- **Request Payload:**
```json
{
  "name": "Iced Matcha Latte",
  "description": "Matcha with milk over ice",
  "category": "beverages",
  "price": 4.25,
  "isAvailable": true,
  "isSeasonal": true,
  "tags": ["cold", "tea"]
}
