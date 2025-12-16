# [drclairlee-web] Frontend

A React.js and Vite frontend deployed on [Vercel](https://drclaireslee.vercel.app/) and [Github Pages](https://drclaireslee.github.io/).

## About
This project serves as the frontend infrastructure for [drclairlee-web/WebPage]. It is built using **React + Vite**. It uses Vercel for the class version and Github Pages for the [client version](https://github.com/drclaireslee/drclaireslee.github.io)

* **Tooling:** Vite
* **Framework:** React
* **Deployment:** Vercel (Hobby Tier) for class version, Github Pages for the client version

## Limitations & Hobby Tier Info
Please note that this project is deployed on the **Vercel Hobby Tier**. 

## Installation

To run this project locally, follow these steps:

1.  **Clone the repository**
    ```bash
    git clone 
    cd WebPage/client
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

<hr/>

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
