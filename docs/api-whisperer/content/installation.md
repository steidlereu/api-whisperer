This guide helps you install and set up your own developer portal using API Whisperer.

---

### 🧱 Prerequisites

Before getting started, ensure you have the following installed:

- **Node.js** – v18.19.1 or newer
- **Text Editor** – We recommend [Visual Studio Code](https://code.visualstudio.com/)
- **Terminal** – Required to run the scaffolding script
- **Docker** – Required if you want to run your website containerized

---

### 📦 Create a New Project

To create a new developer portal using the official starter template, run:

```bash
npx create-api-whisperer my-developer-portal
```

This will scaffold a new Angular-based project for your documentation portal.

📚 Refer to the [API Whisperer Scaffolding Repository](https://github.com/steidlereu/create-api-whisperer) for more details.

---

### 📁 Project Structure Overview

After running the scaffolding script, your directory should look like this:

```
my-developer-portal
├── app/                   # Angular application directory
├── config.json            # Main configuration file
├── content/               # Custom Markdown and OpenAPI documentation
├── docker/                # Docker-related setup
├── docker-compose.yaml    # Docker Compose configuration
├── Dockerfile             # Docker image definition
├── LICENSE.txt            # License information
└── README.md              # Project documentation
```

🎉 Congratulations! You now have a working base for your documentation website.

---

### 🎨 Customize Your Project

You can easily customize your developer portal by modifying:

- `config.json` – Central configuration entrypoint
- `/app/assets/` – Static assets like:
  - `logo.svg`, `favicon.ico` – Logos and icons
  - `styles.css` – Custom CSS styling
  - Markdown content – Used for sections like **About**, **Home**, or **Product Descriptions**

#### Using the `content/` Directory

To organize and manage your content files, create a `content` directory:

```bash
cd my-developer-portal && mkdir -p content
```

Use this folder to store:

- Markdown files (`*.md`) for page content
- OpenAPI specifications (`*.yaml`) for API documentation
- Other assets like images or css-styles

🗂️ This directory is referenced from your `config.json` and will later be **mounted via Docker** into the application during deployment.

---

### ✅ Next Steps

Now that you've initialized and customized your project, you can:

- Explore the `config.json` configuration options
- Build and run the app locally
- Deploy the app via Docker or web hosting

---
