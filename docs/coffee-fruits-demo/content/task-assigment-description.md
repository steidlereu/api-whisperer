# Task Assignment API - CoffeeShop

## Domain: Barista Workflow  
### Bounded Context: Task Assignment

The **Task Assignment API** is responsible for managing the lifecycle of preparation tasks assigned to baristas. It supports efficient delegation, real-time task tracking, and workload balancing for in-store barista operations.

---

## 📌 Purpose

To enable coffee shop systems (POS, mobile orders, kitchen displays) to:
- Assign order preparation tasks to specific baristas.
- Track progress of each task from assignment to completion.
- Support real-time updates for better workflow visibility.
- Remove tasks upon cancellation or order completion.

---

## 👤 Actors
- **Barista** – Receives and executes assigned tasks.
- **Order Management System** – Creates and tracks tasks linked to orders.
- **Supervisor/Manager** – Monitors task progress and workload.

---

## 🧭 API Journey

### 1. 🔨 Assign a Task
**Use Case:** A new order enters the system and needs to be prepared. A task is assigned to a barista.

- **Endpoint:** `POST /api/tasks`
- **Request Payload:**
```json
{
  "taskId": "task_12345",
  "orderId": "order_67890",
  "items": ["latte", "croissant"],
  "assignedTo": "barista_01",
  "priority": "high"
}
