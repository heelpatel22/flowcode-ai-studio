# 🚀 Website Deployment Guide (FlowCode AI Studio)

This document provides complete, step-by-step instructions for deploying **FlowCode AI Studio** for **100% free** on top hosting platforms.

---

## 🌐 Overview of Free Hosting Providers

| Platform | Free Tier Highlights | Recommended Use | Rating |
| :--- | :--- | :--- | :---: |
| **Vercel** | Unlimited deployments, free `.vercel.app` subdomain, global edge CDN, auto SSL | Vite / React / TanStack projects | **⭐ #1 Recommended** |
| **Netlify** | 100 GB monthly bandwidth, instant HTTPS, free `.netlify.app` subdomain | Static site & SPA deployment | **⭐ #2 Recommended** |
| **Cloudflare Pages** | Unlimited bandwidth, 500 builds/month, ultra-fast global CDN | High performance edge hosting | **⭐ #3 Recommended** |
| **Render** | Free static site hosting, custom domain & SSL support | Full-stack & web apps | Alternative |

---

## 🛠️ Pre-Deployment Verification

Before deploying, verify your local build completes without errors:

```bash
npm run build
```

The compiled files will be output to `dist/client` and `dist/server`.

---

## 🚀 Step-by-Step Deployment Methods

### Option 1: Vercel CLI (Instant Deployment - Fastest)

You can deploy directly from your local terminal in less than 1 minute without setting up Git first:

1. Open your terminal in the project root (`d:\FlowCodeAI\flowcode-ai-studio`).
2. Run the Vercel CLI command:
   ```bash
   npx vercel
   ```
3. Follow the interactive prompts:
   - Log in or sign up via the browser modal.
   - Confirm project root (`./`).
   - Press **Enter** to accept all default settings.
4. Once deployment finishes, Vercel gives you a preview URL (e.g., `https://flowcode-ai-studio.vercel.app`).
5. **For Production Deployment:**
   ```bash
   npx vercel --prod
   ```

---

### Option 2: Vercel via GitHub (Automated CI/CD)

Deploy automatically whenever you push code changes to GitHub:

1. **Push code to GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   # Create a repo on github.com and link it:
   git remote add origin https://github.com/YOUR_USERNAME/flowcode-ai-studio.git
   git push -u origin main
   ```
2. Go to [Vercel.com](https://vercel.com) and click **"Add New" ➔ "Project"**.
3. Import your GitHub repository.
4. Keep standard Vite settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist` (or `dist/client`)
5. Click **Deploy**.

---

### Option 3: Netlify Deployment

#### Method A: Drag & Drop (No Git required)
1. Run local build:
   ```bash
   npm run build
   ```
2. Navigate to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the `dist/client` folder into the Netlify drop zone.
4. Your site will be published instantly!

#### Method B: Netlify GitHub Integration
1. Log in to [Netlify.com](https://netlify.com) and click **"Add new site" ➔ "Import an existing project"**.
2. Connect to GitHub and select `flowcode-ai-studio`.
3. Configure build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist/client`
4. Click **Deploy Site**.

---

### Option 4: Cloudflare Pages

1. Log into [Cloudflare Dashboard](https://dash.cloudflare.com/) ➔ **Workers & Pages** ➔ **Create application** ➔ **Pages**.
2. Connect your GitHub repository.
3. Set build configuration:
   - **Framework Preset**: Vite / React
   - **Build command**: `npm run build`
   - **Build output directory**: `dist/client`
4. Click **Save and Deploy**.

---

## ⚙️ Configured Single Page App (SPA) Routing Files

To ensure client-side routes (e.g. `/features`, `/pricing`) refresh correctly without returning 404 errors, the following configuration files are already present in the workspace:

1. **`vercel.json`** (Vercel rewrite rules):
   ```json
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```

2. **`public/_redirects`** (Netlify redirect rules):
   ```text
   /*    /index.html   200
   ```

---

## 🔒 Custom Domains & SSL

All platforms listed above provide **free automatic SSL/TLS certificates** and support linking custom domains (e.g. `flowcodeai.com`) under project settings.
