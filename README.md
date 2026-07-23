# 1980's — A Nostalgic Restaurant — Website

## Structure
```
frontend/        static site (HTML/CSS/JS)
  index.html
  css/style.css
  js/main.js
  images/         <- drop your real photos here (see images/README.txt)
backend/          express server, serves frontend + /api/contact
  server.js
  package.json
```

## Run it
```bash
cd backend
npm install
npm start
```
Open http://localhost:3000

## Add your photos
Read `frontend/images/README.txt` — drop files with the exact names listed
(logo.png, hero-exterior.jpg, dish-*.jpg, guest-*.jpg, gallery-*.jpg).
Placeholders show automatically until then; nothing breaks.

## Notes
- No booking system, on purpose.
- Contact form (if you wire one up) posts to `/api/contact`, logged to `backend/contact-messages.json`.
- Update phone / Instagram / email / addresses directly in `index.html` under `#contact`.
- Add more gallery tiles or guest cards by copying existing blocks in `index.html`.
