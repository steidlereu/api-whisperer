# API Journey: Order Queue Management (Barista Workflow Domain)

The **Order Queue Management** API journey is a critical part of the Barista Workflow domain, designed to streamline the handling of customer orders from the moment they are placed until they are fulfilled or canceled. This journey ensures efficient management of the order queue, enabling baristas to prioritize tasks, track progress, and maintain a smooth workflow in the coffee shop. Below is a detailed description of the key steps and endpoints involved in this journey:

---

## 1. Receive New Order
The journey begins with the addition of a new order to the queue. This step ensures that customer orders are captured and queued for processing.

- **Endpoint**: `POST /api/orders`
- **Purpose**: Add a new order to the queue for processing.
- **Description**: This endpoint allows the system to add a new customer order to the queue. The order includes details such as items, quantity, priority, and customer information.
- **Example Request**:
  ```json
  {
    "orderId": "12345",
    "items": [
      { "itemId": "coffee_001", "quantity": 2 },
      { "itemId": "snack_003", "quantity": 1 }
    ],
    "priority": "normal",
    "customerName": "John Doe"
  }

## 2. Get Current Queue

Baristas benötigen Echtzeit-Einblicke in die Warteschlange, um ihre Aufgaben effektiv zu verwalten. Dieser Schritt bietet eine Momentaufnahme aller aktuell in der Warteschlange befindlichen Bestellungen.

- **Endpoint:** `GET /api/orders/queue`
- **Purpose:** Abrufen der Liste der aktuell in der Warteschlange befindlichen Bestellungen.
- **Description:** Dieser Endpoint liefert eine Echtzeitansicht aller Bestellungen in der Warteschlange, einschließlich ihres Status und ihrer Priorität.

## 3. Update Order Status

Während Bestellungen den Workflow durchlaufen, muss ihr Status aktualisiert werden, um ihren aktuellen Zustand widerzuspiegeln.

- **Endpoint:** `PATCH /api/orders/{orderId}/status`
- **Purpose:** Aktualisieren des Status einer Bestellung in der Warteschlange.
- **Description:** Dieser Endpoint ermöglicht es Baristas, den Status einer Bestellung zu aktualisieren (z. B. von "pending" zu "in_progress" oder "completed").
- **Example Request:**

```http
PATCH /api/orders/123/status
Content-Type: application/json

{
  "status": "in_progress"
}
```

...