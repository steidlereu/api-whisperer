# Category Management API - CoffeeShop

## Domain: Menu Management  
### Bounded Context: Category Management

The **Category Management API** enables structured organization of menu items by managing menu categories such as *beverages*, *snacks*, or *seasonal specials*. It is used by internal tools and administration interfaces to keep the menu easy to browse and manage across systems.

---

## 📌 Purpose

To support:
- Logical grouping of menu items
- Dynamic category creation, updates, and deletion
- Easy integration with POS and ordering interfaces
- Better customer navigation and staff clarity

---

## 👤 Actors
- **Menu Manager** – Creates and maintains categories.
- **POS and Ordering Systems** – Display menu items grouped by category.
- **Kitchen Display** – Uses categories to filter tasks or items.

---

## 🧭 API Journey

### 1. ➕ Create a New Category
**Use Case:** The manager adds a new "Seasonal" category.

- **Endpoint:** `POST /api/menu/categories`
- **Request Payload:**
```json
{
  "name": "Seasonal",
  "description": "Limited-time seasonal offerings"
}
