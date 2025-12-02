# [drclairlee-web] Backend API

A Node.js and Express backend API deployed on [Vercel](https://drclaireslee-backend.vercel.app/).

## About
This project serves as the backend infrastructure for [drclairlee-web/WebPage]. It is built using **Express.js** and takes advantage of Vercel's Serverless Functions to handle requests.

* **Runtime:** Node.js
* **Framework:** Express
* **Deployment:** Vercel (Hobby Tier)

## Limitations & Hobby Tier Info
Please note that this project is deployed on the **Vercel Hobby Tier**. 

## Installation

To run this project locally, follow these steps:

1.  **Clone the repository**
    ```bash
    git clone 
    cd WebPage/server
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

## JSdocs

[Link to project's JSdocs](https://drclairlee-web.github.io/WebPage/)

## API Endpoints

Note the request body for patch and getting a particular object do not have to include 
all properties stated in the request body

###  labMember

For POST at path /api/labMember use a form with attribute enctype="multipart/form-data"

Contains the following fields:
  _id: {type: mongoose._id},
  fullName: {type: String, required: true},
  type: {type: String, required: true},
  email: {type: String},
  imageURL: {type: String},
  background: {type: [String]}

| Method | Endpoint | Description | Request Body (JSON) | Auth role requirement | <br />
| :--- | :--- | :--- | :--- | :--- | <br />
| `GET` | `/api/labMember/all` | Get all lab members | N/A | N/A | <br /> 
| `GET` | `/api/labMember` | Get specific lab members |`{ "fullName": "John Smith", type: "undergraduate", "email": "john@test.com", "background:["Example"]}` | editor |  <br />
| `DELETE` | `/api/labMember/:id` | Delete a lab member | N/A | editor | <br />
| `POST` | `/api/labMember` | Create a lab member | `{ "fullName": "John Smith", type: "undergraduate", "email": "john@test.com", "background:["Example"]}` | editor | <br />
| `PATCH` | `/api/labMember/:id` | Update a lab member | `{ "fullName": "John Smith", type: "undergraduate", "email": "john@test.com", "background:["Example"]}` | editor | 
###  editor

Note passhash for the request body should be a password in plaintext

Contains the following fields:
    _id: {type: mongoose._id},
    username: {type: String, required: true, unique: true},
    passhash: {type: String, minLength: 60, maxLength: 60, required: true},
    role: {type: String}    

/api/editor and /api/editor/auth/admin return a JSON
response object {token: jwt token} to put into header["x-auth"]
to satisfy auth role requirments

| Method | Endpoint | Description | Request Body (JSON) | Auth role requirement |<br /> 
| :--- | :--- | :--- | :--- | :--- | <br />
| `GET` | `/api/editor/all` | Get all editors | N/A | admin | <br />
| `GET` | `/api/editor` | Get specific editors |`{"username": "Bob"}` | admin | <br />
| `DELETE` | `/api/editor/:id` | Delete an editor | N/A | admin | <br />
| `DELETE` | `/api/editor/user/:username` | Delete a editor | N/A | admin | <br />
| `POST` | `/api/editor` | Create an editor | `{"username": "Bob", "passhash": "passwordexample", role: "editor"}` | admin | <br />
| `POST` | `/api/editor/auth` | Authorize an editor with a role of atleast editor | `{"username": "Bob", "passhash": "passwordexample"}` | N/A | <br />
| `POST` | `/api/editor/auth/admin` | Authorize an editor with a role of admin | `{"username": "Bob", "passhash": "passwordexample"}` | N/A | <br />
| `PATCH` | `/api/editor/user/:username` | Update a editor | `{"passhash": "passwordexample"}` | admin and editor* |


###  publication
WIP
Contains the following fields
     _id: {type: mongoose._id},
    title: {type: String, unique: true, required: true},
    author: {type: [String]},
    url:  {type: String},
    abstract: {type: String}

| Method | Endpoint | Description | Request Body (JSON) | Auth role requirement | <br />
| :--- | :--- | :--- | :--- | :--- | <br />
| `GET` | `/api/publication/all` | Get all publications | N/A | N/A | <br />
| `GET` | `/api/publication` | Get specific publications |`{ "title": "example-title"}` | editor | <br />
| `DELETE` | `/api/publication/:id` | Delete a publication | N/A | editor | <br />
| `POST` | `/api/publication` | Create a publication | `{ "title": "example-title"}` | editor | <br />
| `PATCH` | `/api/publication/:id` | Update a publication | `{ "title": "example-title"}`| editor |


### research
WIP

Contains the following fields
    _id: {type: mongoose._id},
	title: {type: String, required: true, unique: true},
    startDate: {type: Date},
	endDate: {type: Date}
    role: {type: String},
    description: {type: String},
    sponsor: {type: [String]},
    fundAmountUsd: {type: Number, min: 0}



| Method | Endpoint | Description | Request Body (JSON) | Auth role requirement | <br />
| :--- | :--- | :--- | :--- | :--- |<br />
| `GET` | `/api/research/all` | Get all researches | N/A | N/A | <br />
| `GET` | `/api/research` | Get specific researches |`{ "title": "example-title"}` | editor | <br />
| `DELETE` | `/api/research/:id` | Delete a research | N/A | editor | <br />
| `POST` | `/api/research` | Create a research | `{ "title": "example-title"}` | editor | <br />
| `PATCH` | `/api/research/:id` | Update a research | `{ "title": "example-title"}`| editor |


This project is configured for Vercel.

1.  Install Vercel CLI: `npm i -g vercel`
2.  Run `vercel` to deploy.
