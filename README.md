# TownBasket 🛍️

A local grocery and daily-needs shopping app built with React. Browse products by
category, add them to a cart, place orders, and view your own order history —
with per-user login so each account only sees its own cart and orders.

**Live demo:** [https://townbasket-five.vercel.app/]
**GitHub:** https://github.com/venuvardhansomisetty/townbasket

## Screenshots
<img width="1346" height="636" alt="Screenshot 2026-09-28 004758" src="https://github.com/user-attachments/assets/65df75a8-de70-42bb-a838-83febf19a9ef" />
<img width="1348" height="632" alt="Screenshot 2026-09-28 004455" src="https://github.com/user-attachments/assets/f2f1550d-5029-4a9d-88d2-0b733ce9f62c" />
<img width="1350" height="641" alt="Screenshot 2026-09-28 004533" src="https://github.com/user-attachments/assets/368f977d-801e-40f1-9c7c-e71374ebd1bf" />
<img width="1348" height="632" alt="Screenshot 2026-09-28 004741" src="https://github.com/user-attachments/assets/37badbcf-af54-4b3b-b928-696c138442cc" />





## Features
- 6 product categories (Vegetables, Milk, Kirana, Fancy Items, Cool Drinks, Pickles)
  rendered from a single data-driven page component
- Add to cart with live quantity selection per product
- Cart with running total and a free-delivery threshold message
- Place Order, which saves an order and clears the cart
- Register/Login, with each user's cart and order history kept separate
- My Orders page showing only the logged-in user's own past orders, with the
  option to cancel an order

## Tech stack
React (Vite), React Router, React Context API, Bootstrap, localStorage for
persistence (no backend yet)

## How it's structured
- `src/data/products.js` — all product info for every category, in one place
- `src/context/CartContext.jsx` — shared cart, orders, and login state, using
  React Context, saved to localStorage
- `src/components/` — reusable pieces: Layout (navbar/banner/footer), ProductCard
- `src/pages/` — one page per route: Shopping, CategoryPage, Cart, MyOrders, Login

## What I originally built vs. what I refactored
The original version was 10 separate HTML pages with a plain JavaScript file
(`cart.js`) that manually parsed cart data from comma-and-pipe-separated strings.
I rebuilt it as a single-page React app: one data-driven component now serves all
6 product categories instead of 6 near-identical HTML files, and the cart/orders
are handled with proper React state instead of manual string parsing.

## Bugs I found and fixed during the rebuild
- Product images broke on any page other than the home page, because image paths
  were relative instead of root-relative, which fails once React Router changes
  the URL. Fixed by using root-relative paths (`/images/...`).
- The original login button called a function that was never defined, so login
  silently did nothing. Implemented real registration and login state.
- Every user shared one single order list. Fixed by tagging each order with the
  logged-in user's email and filtering My Orders to just that user.

## Known limitations
- Accounts and passwords are stored in the browser's localStorage, not a real
  database, and passwords aren't hashed. This is a frontend-only project; a real
  backend (like the one in my RecallDev project) would fix this.
- No payment integration; "Place Order" is a demo checkout only.

## Run locally
```
git clone https://github.com/venuvardhansomisetty/townbasket.git
cd townbasket
npm install
npm run dev
```
