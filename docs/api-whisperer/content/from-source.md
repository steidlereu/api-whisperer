This project is built with [Angular CLI](https://github.com/angular/angular-cli) and is designed to be easily extendable and configurable.

---

### 🧱 Prerequisites

- Node.js (v18+ recommended)
- Angular CLI (`npm install -g @angular/cli`)
- A web browser (e.g., Chrome)

---

### 🔨 Building the Application

To build a production version of the application:

1. Overwrite the environment variables in `/src/environments`.
2. Update the configuration file at `/src/assets/config.json`.
3. Run the following command:

```bash
ng build --configuration production
```

The output will be placed in the `/dist` folder.

---

### 🌍 Angular Environment Configuration

Angular uses environment files to differentiate between development and production settings.

#### Current Environment Configuration

```ts
export const environment = {
  production: true,
  configUrl: '/assets/config.json'
};
```

#### Configuration Table

| Parameter     | Type     | Default Value             | Description                                      |
|---------------|----------|---------------------------|--------------------------------------------------|
| `production`  | boolean  | `true`                    | Indicates if the build is for production use.    |
| `configUrl`   | string   | `/assets/config.json`     | URL path to the main configuration file.         |

---

### 🚀 Running a Development Server

To start a local development server with hot reloading:

```bash
ng serve
```

Then open [http://localhost:4200](http://localhost:4200) in your browser. The app will reload automatically on changes.

---

### ⚙️ Angular Deployment Notes

When deploying an Angular application, make sure to:

- Set `"baseHref"` in `angular.json` if deploying to a sub-path.
- Ensure the `config.json` is included in the `/assets` directory and correctly served.
- Use Angular CLI’s output from `/dist/<project-name>` for deployment.

You can host the app on any static file server such as:

- GitHub Pages
- Firebase Hosting
- Netlify
- Vercel
- Docker (with NGINX)

---

### ⚒️ Code Scaffolding

To generate new elements like components or services:

```bash
ng generate component component-name
# or
ng generate service service-name
```

You can also scaffold:
- Directives
- Pipes
- Classes
- Guards
- Interfaces
- Enums
- Modules

---

