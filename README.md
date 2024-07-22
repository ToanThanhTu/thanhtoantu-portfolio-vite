# Thanh Toan Tu Portfolio Source Code

This is the complete source code for my portfolio project, including frontend and backend code.

Only backend is needed for local run.

This project frontend is deployed to GitHub Pages and backend is deployed to Fly.io.

GitHub Pages: https://toanthanhtu.github.io/thanhtoantu-portfolio-frontend/

Fly.io: https://thanhtoantu-portfolio-backend.fly.dev

## Folder Structure

```
thanhtoantu-portfolio-vite
├───frontend (submodule)
│   └───src
│       ├───assets
│       ├───components
│       ├───context
│       ├───data
│       ├───pages
│       └───services
└───backend (submodule)
    ├───dist
    ├───requests
    └───src
        ├───controllers
        ├───models
        └───routes
```

## Install and Run

To run this project locally:

1. Clone this repository with submodules: `git clone --recurse-submodules https://github.com/ToanThanhTu/thanhtoantu-portfolio-vite.git`.
1. cd into 'backend' and 'frontend' directories and make sure that they are on the correct git remote url and branch by running `git remote -v` and `git branch`.
1. Install dependencies
    1. cd into `backend` and `frontend` folders.
    1. Run `npm install` to install necessary dependencies or `npm install --include=dev` to also install dev dependencies for development.
1. Set up backend
    1. Create a free [MongoDB Atlas](https://www.mongodb.com/atlas) database and get the Connect URL to the database.
    1. Create a free [Open Weather API](https://openweathermap.org/api) account and get the API Key.
    1. Create an .env file in the `backend` directory, and add to the file:
        1. `WEATHER_KEY`  
            - E.g. `WEATHER_KEY="5r12t34h5v6e789c0ii12345ab67c"`
        1. `MONGODB_URI`
            - E.g. `MONGODB_URI="mongodb+srv://<username>:<password>@data.s1sbewn.mongodb.net/<databaseName>?retryWrites=true&w=majority&appName=data"`
        1. and `PORT=3001`
1. Run `npm run dev` on `backend` directory to start.
1. Open `http://localhost:3001` on the browser.
1. For frontend development:
    1. Run `npm run dev` on both directories.
    1. Open `http://localhost:5173` on the browser.
    1. Run `npm run build:ui` on the `backend` directory to create frontend production build. 

## Features

- Brief Introduction
- Skills Summary and Professional Development
- Selected Projects
- Contact Methods
- Weather Data from [Open Weather API](https://openweathermap.org/api)
- TO-DO: Live Texts connected to MongoDB database

## Tech & Dependencies

### Frontend

- TypeScript
- React
- Vite
- TailWindCSS
- Material UI
- Axios
- GitHub Pages

### Backend

- Node.js
- Express.js
- MongoDB - Mongoose
- Axios
- Cors
- Dotenv
- Nodemon
- Fly.io