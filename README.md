# Oshikatsu JSON

A simple, beautiful, and statically-generated web page to display and track your "Oshikatsu" (推し活) anniversaries. This project reads data directly from a `JSON` file, making it incredibly easy to customize and deploy.

**Live Demo:** oshikatsu.luqmanhadi.com

## ✨ Features

-   **JSON-Powered:** All data is managed in a single `public/oshikatsu.json` file. No database needed.
-   **Anniversary Counter:** Automatically calculates and displays the number of days you've been supporting your "oshi".
-   **Statically Generated:** Built with the Next.js App Router for excellent performance and SEO.
-   **Beautifully Styled:** Clean and modern design using Tailwind CSS.
-   **Easily Deployable:** Ready to be deployed on Vercel or any other static hosting provider.

## 🔧 How to Customize

The core of this application is the `public/oshikatsu.json` file. To add your own "oshi", simply edit this file.

Each entry in the JSON array should follow this structure:

```json
{
  "order_id": 1,
  "oshi_name_en": "Hoshimachi Suisei",
  "oshi_name_jp": "星街すいせい",
  "oshi_org_en": "hololive",
  "oshi_org_jp": "ホロライブ",
  "oshi_mark": "☄️",
  "oshi_start_date": "2019-05-19"
}
```

-   `order_id`: A unique number to determine the display order.
-   `oshi_name_en` / `oshi_name_jp`: The name of your oshi in English and Japanese.
-   `oshi_org_en` / `oshi_org_jp`: The organization or group they belong to.
-   `oshi_mark`: An emoji or symbol representing them.
-   `oshi_start_date`: The date you started supporting them, in `YYYY-MM-DD` format.

After editing the JSON file, the changes will be reflected the next time you build the project.

## 🚀 Getting Started

This is a Next.js project.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## ▲ Deploy on Vercel

The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out the Next.js deployment documentation for more details.

