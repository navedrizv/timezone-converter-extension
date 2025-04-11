# 🕒 Time Converter Chrome Extension

This Chrome Extension detects time values on any webpage (e.g., `5:00 PM EST`) and allows you to convert them into your preferred timezone with a hover interaction and a subtle tooltip interface.

[![version](https://img.shields.io/badge/version-1.0.0-blue.svg)](#)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](#)
![status](https://img.shields.io/badge/status-active-success.svg)

## 🚀 Features

- Detects time strings with timezone abbreviations (e.g., EST, PST, IST, etc.)
- Highlights detected times with a dashed underline
- Shows a tooltip with timezone options on hover
- Converts to your selected timezone using [Luxon](https://moment.github.io/luxon/)
- Works across any website

## 📁 Folder Structure

```
time-converter-extension/
├── public/
│ ├── manifest.json
│ ├── contentScript.js
│ ├── tooltip.css
│ ├── timeUtil.js
│ ├── index.html
│ └── tooltip.css
├── src/
│ └── popup/
│ ├── index.html
│ ├── main.jsx
│ └── App.jsx
├── vite.config.js
├── package.json
└── README.md
```

## 🧱 Tech Stack

- [Vite](https://vitejs.dev/) for frontend tooling
- React (for popup UI)
- Vanilla JS for content scripts
- [Luxon](https://moment.github.io/luxon/) for timezone-aware time parsing and conversion

## 🛠️ Setup & Build

### 1. Install dependencies

```
npm install
```

### 2. Start development (React popup only)

### 3. Build extension for Chrome

```
npm run build
```

This will create the dist/ folder containing everything Chrome needs (popup, content scripts, styles, manifest).

## 🧩 Load the Extension in Chrome

Open Chrome and go to chrome://extensions

#### 1. Enable "Developer Mode"

#### 2. Click "Load Unpacked"

#### 3. Select the dist/ folder

You're good to go!

✅ Example
On any page showing a time like:

```
The event starts at 3:00 PM EST.
```

You'll see it underlined. Hover over it, and the extension will offer conversion options like:

```
→ Convert to:
   - PST: 12:00 PM
   - IST: 1:30 AM (next day)

```

## 📌 Notes

All scripts are bundled and injected using manifest.json

Luxon is loaded locally (not via CDN) to comply with Chrome Extension CSP
