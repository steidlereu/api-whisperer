<h1 style="text-align: center">API Whisperer - Open Source Developer Portal Software</h1>

![Static Badge](https://img.shields.io/badge/latest_release-v1.2.0-blue)
![Static Badge](https://img.shields.io/badge/status-stable-green)
![Static Badge](https://img.shields.io/badge/angular-v18-red)

<p style="text-align: center">
  <br>
  <img src="/docs/api-whisperer/images/api-whisperer.png" alt="API Whisperer logo" width="100px"/>
  <br><br>
  <em>API Whisperer is an open-source Developer Portal and API Portal software designed to help developers explore APIs, access documentation, and utilize tools for building and integrating applications. It provides a centralized platform for managing API documentation, developer tools, and resources.</em>
  <br>
</p>

<hr>

## ✨ Key Features

- ⚡ **Fast & Easy to Use** – Powered by [Angular](https://angular.dev/).
- 🛠️ **Software-as-Code** – Configure your portal using JSON and static files.
- 🧩 **Domain-Driven Design** – Optimized for APIs with DDD structure.
- 🎨 **Fully Customizable** – Themes, styles & content via Markdown and config.
- 🚀 **Quick Deployment** – Run on any static host or with Docker.

## Live Demo

🔗 [**Coffee & Fruits Store Demo**](https://demo.api-whisperer.io)

Try out local with [Docker Compose](https://docs.docker.com/compose/) by running:

  ```bash
  docker compose -f demo.docker-compose.yml up --build --force-recreate
  ```

## Documentation

🔗 See the [API Whisperer Documentation](https://api-whisperer.io).

## Get Started

### 1. Scaffold your portal
```bash
npx create-api-whisperer my-developer-portal
```

### 2. Add your configuration
Create a `config.json` and place it in `/app/assets`.

### 3. Add your content
Put your Markdown pages, OpenAPI specs and images inside `/app/assets/content`.

  For more details refer to the [API Whisperer Documentation](https://api-whisperer.io).

## Building from Source

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

### Building

Overwrite environments at `/src/environments` or configuration at `/src/assets` and run `ng build --configuration production` to build a new application.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## For Contributors

We welcome contributions! If you want to improve features, add integrations, or enhance docs, please [submit an Issue](https://github.com/steidlereu/api-whisperer/issues).

## Community & Support

- Website: [api-whisperer.io](https://api-whisperer.io)
- Issues: [GitHub Issues](https://github.com/steidlereu/api-whisperer/issues)
- Contact: info@steidler.eu

## 📄 License

This project is licensed under a [Customized MIT License](./LICENSE.txt)!

- ✅ Free for personal use and small businesses  
  (fewer than 10 employees **and** under €2M annual revenue)  
- ❌ Not permitted for resale, commercial SaaS, or use by larger organizations  
- 📬 [Commercial licenses available](mailto:info@steidler.eu)

Please refer to the [LICENSE.txt](./LICENSE.txt) file for full terms and conditions.

## Powered by [Steidler IT-Consulting](https://www.steidler.eu/)

<img src="/docs/api-whisperer/images/steidler-eu.png" alt="Steidler IT-Consulting logo" width="300px"/>

Made with ❤️ in Germany!
