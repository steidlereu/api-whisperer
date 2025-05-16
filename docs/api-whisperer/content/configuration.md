The `config.json` file in the `app/assets/` directory is the central configuration entrypoint for the API Whisperer application. It defines the structure, content, and metadata for the developer portal website. Below is a detailed explanation of the configuration structure based on the `Config` interface and its sub-objects.

---

### General JSON structure

The config.json file contains the following top-level properties:

```json
{
  "license": "string",
  "website": { ... },
  "navigation": { ... },
  "products": [ ... ],
  "home": { ... },
  "about": { ... }
}
```

| Property      | Type             | Description                                            |
|---------------|------------------|--------------------------------------------------------|
| `license`     | `string`         | License key, default is `"personal"` for private usage.|
| `website`     | `Website`        | General information and metadata for the website.      |
| `navigation`  | `Navigation`     | Structure for the site’s navigation menus.             |
| `products`    | `Product[]`      | List of products displayed in the explore section.     |
| `home`        | `Home`           | Configuration of the homepage content.                 |
| `about`       | `About`          | Content and structure for the About page.              |

---

### Detailed Sections

#### `Website`

The `website` section contains core metadata and global settings for the website.

```json
{
  "title": "string",
  "copyright": "string",
  "logo": "string",
  "favicon": "string",
  "styles": "string"
}
```

| Property       | Type     | Description                         |
|----------------|----------|-------------------------------------|
| `title`        | `string` | Website title shown in the browser. |
| `copyright`    | `string` | Copyright notice of the website.    |
| `logo`         | `string` | Path or URL to the website logo.    |
| `favicon`      | `string` | Path or URL to the favicon.         |
| `styles`       | `string` | Path to custom CSS styles.          |

---

#### `Navigation`

The `navigation` section defines how users can navigate through the website.

```json
{
  "main": [
    {
      "label": "string",
      "path": "string",
      "src": "string",
      "hidden": "boolean",
      "external": "boolean",
      "blank": "boolean"
    }
  ],
  "footer": [
    {
      "name": "string",
      "links": [
        {
          "name": "string",
          "url": "string",
          "blank": "boolean"
        }
      ]
    }
  ]
}
```

---

##### `NavigationItem`

| Property   | Type      | Description                                   |
|------------|-----------|-----------------------------------------------|
| `label`    | `string`  | Text shown for the navigation item.           |
| `path`     | `string`  | Target URL or page reference as [Angular routing](https://v18.angular.dev/guide/routing).  |
| `src`      | `string`  | Optional path to source file for the navigation target content. Must be a [Markdown](https://daringfireball.net/projects/markdown/) file.  |
| `hidden`   | `boolean` | Whether the item is hidden from the menu.     |
| `external` | `boolean` | Indicates if the link points to an external site. |
| `blank`    | `boolean` | Opens the link in a new tab if `true`.        |

---

##### `FooterSection`

| Property   | Type            | Description                                   |
|------------|-----------------|-----------------------------------------------|
| `name`    | `string`        | Title of the footer section.                 |
| `links`    | `FooterLink[]`  | Links displayed in the footer section.     |

---

##### `FooterLink`

| Property   | Type            | Description                                   |
|------------|-----------------|-----------------------------------------------|
| `title`    | `string`        | Title of the footer section.                 |
| `links`    | `FooterLink[]`  | Links displayed in the footer section.     |

---

#### `Product`

The `products` section lists the products offered on the website.

```json
[
  {
    "name": "string",
    "description": "string",
    "domains": [
      {
        "name": "string",
        "description": "string",
        "services": [
          {
            "name": "string",
            "content": [
              {
                "version": "string",
                "displayVersion": "string",
                "preview": "boolean",
                "openAPI": "string",
                "description": "string"
              }
            ]
          }
        ]
      }
    ]
  }
]
```

##### `Product`

⚠️ A product is single, closed unit you want to describe in your developer portal.

| Property       | Type       | Description                                   |
|----------------|------------|-----------------------------------------------|
| `name`         | `string`   | Unique name of the product.                   |
| `description`  | `string`   | Path to the description file of the product. Must be a [Markdown](https://daringfireball.net/projects/markdown/) file.         |
| `domains`      | `Domain[]` | List of domains associated with the product.  |

##### `Domain`

⚠️ A domain is a single, logical business unit of your product. Can be used to structure your documentation into different chaperts or business abilities.

| Property       | Type         | Description                                   |
|----------------|--------------|-----------------------------------------------|
| `name`         | `string`     | Unique name of the domain.                           |
| `description`  | `string`     | Path to the description file of the domain. Must be a [Markdown](https://daringfireball.net/projects/markdown/) file.                    |
| `services`     | `Service[]`  | List of services offered within the domain.   |

##### `Service`

⚠️ A service is a single API in your developer portal documentation. Each service contains excatly one OpenAPI specification. The service object supports different versions of your service / API.

| Property       | Type         | Description                                   |
|----------------|--------------|-----------------------------------------------|
| `name`         | `string`     | Unique name of the service.                          |
| `content`      | `Content[]`  | List of different versions for the service.        |

##### `Content`

⚠️ A content descibes one version of your service.

| Property         | Type      | Description                                   |
|------------------|-----------|-----------------------------------------------|
| `version`        | `string`  | Version of the service.                       |
| `displayVersion` | `string`  | Displayed version of the service.             |
| `preview`        | `boolean` | Indicates if the content is in preview mode.  |
| `openAPI`        | `string`  | Path to the OpenAPI specification file. Must be a [OpenAPI](https://spec.openapis.org/oas/latest.html) Yaml file.    |
| `description`    | `string`  | Path to the description file. Must be a [Markdown](https://daringfireball.net/projects/markdown/) file.               |

---

#### `Home`

The `home` section configures the homepage content.

```json
{
  "title": "string",
  "description": "string",
  "logo": "string"
}
```

| Property       | Type     | Description                         |
|----------------|----------|-------------------------------------|
| `title`        | `string` | Title of the home teaser. |
| `description`      | `string` | Description of the home teaser.         |
| `logo`         | `string` | Path or URL to the teaser logo.    |

---

#### `About`

The `about` section defines the content displayed on the About page.

```json
{
  "companyName": "string",
  "companyAddress": {
    "streetAddress": "string",
    "locality": "string",
    "region": "string",
    "postalCode": "string",
    "country": "string",
    "countryCode": "string"
  },
  "companyEmail": "string",
  "companyPhone": "string",
  "companyRegistrationNumber": "string",
  "companyTaxId": "string",
  "representative": "string",
  "representativePosition": "string"
}
```

---

This documentation provides a comprehensive overview of the config.json structure and its components, ensuring easy customization and configuration of the API Whisperer application.
