This guide describes how to deploy the API Whisperer application using either traditional web hosting or container-based environments.

---

### 🌐 Web Hosting

To deploy using standard web hosting:

1. Copy your `config.json` and the `/content` folder into the `/app/assets` directory of your application.
2. Upload the entire application to your shared web hosting provider of choice.

✅ This method is suitable for simple deployments without containerization.

---

### 🐳 Docker Deployment

You can deploy the application using **Docker Compose** or **Kubernetes**, depending on your infrastructure:

#### Using Docker Compose

Run the following command from the project root:

```bash
docker compose up --build --force-recreate --detach
```

🔄 This command builds the container image, recreates containers if needed, and starts everything in detached mode.

#### Using Kubernetes

To deploy with Kubernetes:

- Create a [ConfigMap](https://kubernetes.io/docs/concepts/configuration/configmap/) to mount your `config.json` and `/content` folder into the container.
- Mount them into `/app/assets` in your pod configuration.

📦 This method is recommended for scalable, production-grade environments.

---
