# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Rebuild Pizza

A modern React + Vite pizza ordering app built with Tailwind CSS and Redux Toolkit. This project lets users browse a pizza menu, add items to a cart, and submit an order using a sample backend API.

## Who is it for?

- Frontend developers learning React, Vite, and Redux Toolkit.
- Students rebuilding a complete app from a starter template.
- Anyone who wants a small e-commerce-style UI for ordering pizza with cart and form workflows.

## Who are you trying to help?

This project helps developers understand how to build a user-friendly ordering experience using:

- React Router for page navigation
- Redux Toolkit for cart and user state
- Tailwind CSS for responsive UI styling
- API calls for menu loading and order creation

It also helps non-technical users follow a clear ordering flow: enter a name, choose pizzas, review the cart, and submit delivery details.

## What does it do?

The app provides a complete pizza ordering flow with the following features:

- Homepage with a prompt to start ordering
- User onboarding page to capture a customer name
- Menu page that loads pizza items from an external API
- Add-to-cart functionality with quantity controls
- Cart page with clear cart and order navigation
- Order creation form collecting name, phone, and address
- API integration for submitting the order

## What problem does it solve?

This app solves the problem of building a functional online order interface for a pizza restaurant. It demonstrates how to:

- connect UI components to global application state
- manage a shopping cart and order flow
- fetch and submit data to backend APIs
- create a responsive experience for desktop and mobile

## What is the successful version of the project?

A successful version of `rebuild-pizza` is one that delivers a smooth, testable prototype for pizza ordering, with the following outcomes:

- Routes work correctly: home, order onboarding, menu, cart, and new order form
- Menu data loads from the remote API and displays pizza items
- Cart actions update quantities, remove items, and clear the cart
- Order form submits successfully and redirects to the order confirmation route
- The app feels cohesive and easy to use with a polished Tailwind-based UI

## Tech stack

- React 19
- Vite
- React Router DOM
- Redux Toolkit
- Tailwind CSS
- ESLint

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Notes

- The frontend uses `https://react-fast-pizza-api.jonas.io/api` for menu and order requests.
- The `/order/orderid` route is currently a placeholder for order details.
- There is a button for geolocation/address lookup in the order form, which can be extended using the existing `apiGeolocation.js` helper.
