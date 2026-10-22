# My Favourite Person — Birthday Website

A cinematic, responsive React + Vite birthday experience. It currently includes an animated hero, memory scrapbook, reasons section, interactive letter, and birthday wish finale. The writing and photos are placeholders for you to personalize.

## 1. Before you start

Use Node.js 22 LTS (22.12.0 or newer) or a current supported LTS release. Your earlier Node.js v21.6.0 is too old for the current Vite tooling and caused the `styleText` error.

After installing Node, close and reopen your terminal, then check:

```bash
node -v
npm -v
```

## 2. Run the website

Extract this ZIP, open a terminal inside the `birthday-for-her` folder, and run:

```bash
npm install
npm run dev
```

Open the local URL Vite prints in the terminal (usually `http://localhost:5173`).

## 3. Personalize the content

Open `src/App.jsx` and edit the `STORY` object near the top. Change the name, your name, hero note, memories, reasons, letter, and final message. You can do this later; it works with the starter text for now.

## 4. Add photos

Put your photos in `public/photos/` using these exact names:

- `her.jpg`
- `us.jpg`
- `first-memory.jpg`
- `favourite-day.jpg`
- `ordinary-day.jpg`

If you do not have photos ready, the site shows designed placeholders.

## 5. Check a production build

```bash
npm run build
```

This command creates the production output in `dist/`. A build has not been run as part of preparing this starter ZIP.
