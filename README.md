# Your Angular Portfolio

A dark-themed developer portfolio built with Angular (standalone components),
matching the structure of: Hero → About → Experience → Projects → Open Source →
Education → Contact.

## 1. Run it locally

You'll need [Node.js](https://nodejs.org) (v18+) installed.

```bash
npm install
npm start
```

Open **http://localhost:4200** in your browser.

## 2. Change your details — the only file you need to touch

Open **`src/app/data.ts`**. Every section on the page pulls its content from
this one file. Edit the values inside each object/array:

| In data.ts              | Shows up as                                  |
|--------------------------|-----------------------------------------------|
| `profile`                | Name, role, tagline, resume link, socials, email, phone, location |
| `aboutMe`                 | The About Me paragraph                        |
| `skillGroups`             | The 4 skill category cards                    |
| `experience`              | Work history timeline (add/remove entries freely) |
| `projects`                 | Featured Projects cards                      |
| `openSource`               | Open Source package cards                    |
| `education`                | Education timeline                           |

You can add or remove entries from any array (e.g. add a 3rd job to
`experience`) — the page will automatically render however many items you list.

To add your resume: drop a PDF into `src/assets/` (create the folder if it
doesn't exist) and set `profile.resumeUrl` to match, e.g.
`'assets/resume.pdf'`.

## 3. Change the look (optional)

- **Colors**: edit the CSS variables at the top of `src/styles.css` (`--bg`,
  `--accent`, etc.) to change the color scheme.
- **Fonts**: the Google Fonts link is in `src/index.html`; the font-family
  variables are in `src/styles.css`.
- **Layout/sections**: `src/app/app.component.html` controls structure,
  `src/app/app.component.css` controls section-specific styling.

## 4. Build for deployment

```bash
npm run build
```

This outputs static files to `dist/angular-portfolio/`. Drag that folder into
[Netlify](https://app.netlify.com/drop), or connect the project's GitHub repo
to Netlify/Vercel for automatic deploys.

## 5. Deploy to Netlify (same as the reference site)

1. Push this project to a GitHub repo.
2. In Netlify: **Add new site → Import an existing project**.
3. Build command: `npm run build`
4. Publish directory: `dist/angular-portfolio`
5. Deploy.
