# Allergen and Nutrition Information API - CoffeeShop

## Domain: Menu Management  
### Bounded Context: Allergen and Nutrition Information

The **Allergen and Nutrition Information API** manages health-related data tied to menu items. It allows the coffee shop to publish and maintain accurate nutritional profiles and allergen warnings, enabling transparency for customers and compliance with regulatory standards.

---

## 📌 Purpose

To enable:
- Display of calories, sugar, fat, and protein content
- Identification of allergens (e.g., milk, soy, nuts)
- Dietary indicators (e.g., vegan, gluten-free)
- Up-to-date data across all customer-facing and staff-facing systems

---

## 👤 Actors
- **Menu Manager / Nutritionist** – Enters and updates nutritional data.
- **POS and Mobile App** – Displays nutrition and allergen info to customers.
- **Regulatory Tools** – May query allergen compliance and tracking.

---

## 🧭 API Journey

### 1. 📥 Add or Update Nutrition Profile
**Use Case:** A new drink is added to the menu, and its nutrition data must be published.

- **Endpoint:** `PUT /api/menu/nutrition/{itemId}`
- **Request:**
```json
{
  "calories": 120,
  "sugarGrams": 10.5,
  "fatGrams": 3.2,
  "proteinGrams": 2.1,
  "allergens": ["milk"],
  "isVegan": false,
  "isGlutenFree": true
}
