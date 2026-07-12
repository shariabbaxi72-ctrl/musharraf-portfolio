# Musharraf Mehmood Abbasi | Portfolio

A React (Vite) portfolio site — Flutter Developer.

## Before you deploy — 3 things to set up

### 1. Add your photo
Drop your photo into `public/Musharraf.jpeg` (must be exactly this filename, or update the path in `src/components/Profile.jsx`).

### 2. EmailJS (contact form → your inbox)
1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. **Email Services** → Add New Service → connect your Gmail inbox (`shariabbaxi72@gmail.com`).
3. **Email Templates** → Create New Template → use these variables in the template body: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{to_name}}`.
4. **Account → General** → copy your Public Key.
5. Copy `.env.example` to `.env` and fill in your `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`.

### 3. Google Analytics
1. Go to [analytics.google.com](https://analytics.google.com) → Admin → Data Streams → your web stream.
2. Copy the **Measurement ID** (starts with `G-`).
3. Paste it into `src/main.jsx`, replacing `G-XXXXXXXXXX`.

## Run locally

```bash
npm install --legacy-peer-deps
npm run dev
```

## Build for production

```bash
npm run build
```

Deploys cleanly to Vercel (`vercel.json` included).
