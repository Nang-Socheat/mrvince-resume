# mrvince-resume

A minimal resume website built with **Express.js** and **Handlebars** (`.hbs`) as the view engine.

## Assignment Requirements

- **Handlebars render context** — Resume data passed from Express routes to templates
- **View Partials** — Reusable header and footer components
- **Sections** — Organized resume sections (About, Skills, Experience)
- **Handlebars helpers** — `{{#if}}`, `{{#each}}`, `{{#unless}}`

## Tech Stack

- [Express.js](https://expressjs.com/) — Web framework
- [express-handlebars](https://github.com/express-handlebars/express-handlebars) — Handlebars view engine for Express

## Getting Started

```bash
# Install dependencies
npm install

# Start the server
node app.js
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
mrvince-resume/
├── app.js                  # Express server & routes
├── views/
│   ├── layouts/
│   │   └── main.hbs        # Main HTML layout
│   ├── partials/
│   │   ├── header.hbs      # Reusable header
│   │   └── footer.hbs      # Reusable footer
│   └── home.hbs            # Resume page content
├── package.json
└── README.md
```
