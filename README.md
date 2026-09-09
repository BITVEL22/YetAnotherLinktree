# YetAnotherLinktree

A simple personal link page inspired by Material You. It is static, so it can be hosted on Vercel without a backend or build command.

## Customize

Open `config.js` and edit:

- `name` — display name
- `bio` — short description
- `avatar` — optional image path
- `footer` — footer text
- `primary` — main theme color
- `links` — add, remove, or reorder link cards

Example:

```js
{
  title: "Discord",
  description: "Join my community",
  url: "https://discord.com/",
  icon: "DC"
}
```

You can add as many links as you want.

For a custom icon image:

```js
{
  title: "My Site",
  description: "Personal website",
  url: "https://example.com/",
  iconImage: "assets/site-icon.png"
}
```

This project uses plain HTML, CSS, and JavaScript. There is no database, login system, or server-side code.
