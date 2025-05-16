
# ☕ CoffeeShop API – Getting Started Guide

Willkommen bei der **CoffeeShop API**! Diese API ermöglicht dir den Zugriff auf Kaffeespezialitäten, Bestellungen, Filialdaten und vieles mehr. Hier erfährst du, wie du schnell loslegen kannst.

---

## 🚀 Voraussetzungen

- **API-Key** (nach Registrierung unter [coffeeshop.example.com](https://coffeeshop.example.com))
- HTTP-Client (z. B. Postman, curl oder eine Programmiersprache wie Python/JavaScript)
- Basiskenntnisse in REST APIs

---

## 🔑 Authentifizierung

Alle Anfragen müssen mit einem gültigen API-Key versehen sein.

```http
GET /v1/drinks
Host: api.coffeeshop.example.com
Authorization: Bearer <DEIN_API_KEY>
```

---

## 🌐 Basis-URL

```
https://api.coffeeshop.example.com/v1
```

---

## 📋 Endpunkte

### ☕ Getränke abrufen

```http
GET /drinks
```

**Antwort:**
```json
[
  {
    "id": 1,
    "name": "Espresso",
    "price": 2.50,
    "available": true
  },
  ...
]
```

### 📦 Bestellung aufgeben

```http
POST /orders
Content-Type: application/json
Authorization: Bearer <DEIN_API_KEY>
```

**Body:**
```json
{
  "drink_id": 1,
  "quantity": 2,
  "customer_name": "Max Mustermann"
}
```

**Antwort:**
```json
{
  "order_id": "abc123",
  "status": "confirmed"
}
```

---

## 🛠 Beispiel mit curl

```bash
curl -X GET https://api.coffeeshop.example.com/v1/drinks \
  -H "Authorization: Bearer <DEIN_API_KEY>"
```

---

## ❗ Fehlerbehandlung

| Statuscode | Bedeutung               |
|------------|-------------------------|
| 200        | OK                      |
| 400        | Ungültige Anfrage       |
| 401        | Nicht autorisiert       |
| 404        | Ressource nicht gefunden|
| 500        | Interner Serverfehler   |

---

## 📚 Weitere Ressourcen

- [API-Dokumentation (Swagger)](https://api.coffeeshop.example.com/docs)
- [Support kontaktieren](mailto:support@coffeeshop.example.com)

---

## 🧭 Nächste Schritte

1. Hole dir deinen API-Key.
2. Teste die Endpunkte mit einem HTTP-Client.
3. Integriere die API in deine Anwendung!
