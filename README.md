# FLOWCODE AI Studio

A premium, modern, and highly interactive business portfolio and landing page built with React 19, Vite, TailwindCSS, and TanStack Start.

It features sleek dark-mode aesthetics, custom CSS transitions, smooth entrance animations, responsive navigation, and direct email lead-routing.

---

## 🚀 Quick Start

### 1. Prerequisites

Ensure you have Node.js (v18+) and npm installed.

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### 4. Build for Production

To check for type-safety and bundle the application:

```bash
npm run build
```

The build artifacts will be generated in the `dist` directory.

---

## ⚙️ Configuration & Environment Variables

Create a `.env` file in the root directory (based on `.env.example`):

```env
# Optional: Google Sheets Apps Script URL for lead capture (if you decide to restore sheet capture)
VITE_GOOGLE_SHEET_API_URL=
```

_If left blank, both forms will fall back to using client-side `mailto` email redirects, sending inputs directly to `patelheel2211@gmail.com` via the user's default mail client._

---

## 🚢 Deployment Guide

This project is built using **TanStack Start** (which runs on **Nitro** server engines under the hood), making it highly optimized for modern cloud hosting providers.

### Option A: Vercel (Recommended)

1. Push your code to a GitHub repository.
2. Go to the [Vercel Dashboard](https://vercel.com) and click **Add New** -> **Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect the Vite/Nitro setup. If prompted, use these settings:
   - **Framework Preset**: `Vite` or `Other`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

### Option B: Netlify

1. Push your code to a GitHub repository.
2. Go to the [Netlify Dashboard](https://app.netlify.com) and click **Add new site** -> **Import an existing project**.
3. Import your GitHub repository.
4. Configure the build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
5. Click **Deploy Site**.

### Option C: Cloudflare Pages

1. Push your code to a GitHub repository.
2. Go to your [Cloudflare Dashboard](https://dash.cloudflare.com) -> **Workers & Pages** -> **Create Page**.
3. Connect your GitHub repository.
4. Set the build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/client`
5. Click **Save and Deploy**.

---

## 🎨 Tech Stack & Features

- **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Routing & SSR**: [TanStack Start](https://tanstack.com/router/latest/docs/start/overview)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/) & Glassmorphism design tokens
- **Animations**: Custom floating elements, marquee sliders, and scroll-triggered reveal animations
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.dev/) toast notifications
