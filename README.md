# YetAnotherLinktree

A simple personal link page that's fully open and free to use inspired by Material You. It is a static website, so it can be hosted on Vercel without a backend or build command.

## Customize

Most customization lives in `config.js`.

### Profile and animated GIF

`avatar` accepts a local path and remote, including animated GIFs:

```js
avatar: "assets/profile.gif"
```

or:

```js
avatar: "https://example.com/profile.gif"
```

The browser displays the GIF as an animation.

## Built-in themes

Set `theme` in `config.js`:

```js
theme: "light"
```

Available themes:

- `light` — standard Material You light
- `dark` — Material You dark
- `solarized-dark` — Solarized Dark colors mapped to Material You roles
- `system` — follows the visitor's operating-system theme

Examples:

```js
theme: "solarized-dark"
```

```js
theme: "system"
```

### Solarized Dark

`solarized-dark` uses the recognizable Solarized Dark palette while keeping the Material You visual language: rounded containers, tonal surfaces, elevation, focus states, and responsive layout.

You can override its accent:

```js
theme: "solarized-dark",
primary: "#2AA198",
```

## Link cards and GIF logos

Add, remove, or reorder links:

```js
{
  title: "Discord",
  description: "Join my community",
  url: "https://discord.com/",
  icon: "DC"
}
```

For a local animated GIF logo:

```js
{
  title: "My Project",
  description: "Check out my project",
  url: "https://example.com/",
  icon: "assets/project-logo.gif"
}
```

Remote GIFs also work:

```js
{
  title: "My Project",
  description: "Check out my project",
  url: "https://example.com/",
  icon: "https://example.com/project-logo.gif"
}
```

You can alternatively use `iconImage`:

```js
{
  title: "My Site",
  description: "Personal website",
  url: "https://example.com/",
  iconImage: "assets/site-icon.gif"
}
```

## Local assets

Put images in `assets/`:

```text
assets/
├── profile.gif
├── github.gif
└── project-logo.png
```

Then reference them from `config.js`.

## Vercel

No build step is required.

1. Download the template & edit config.js.
2. Import it into Vercel.
3. Use **Other** as the framework preset if asked.
4. Leave the build command and output directory empty.
5. Deploy.

Future pushes to the connected branch can automatically trigger new deployments.

## Project structure

```text
YetAnotherLinktree/
├── assets/
├── config.js
├── index.html
├── script.js
├── style.css
├── vercel.json
└── README.md
```

This project uses plain HTML, CSS, and JavaScript. There is no database, login system, or server-side code.
