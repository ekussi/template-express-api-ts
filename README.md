# Node/Express Typescript Starter API

## Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm start` to start the local server


## Code Overview

### Application Structure

- `Server.ts` - The entry point to our application. This file defines our express server. It also requires the routes and models we'll be using in the application.
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models.
- The 'proper' way of using the structure in this app is as follows:
  - `Server.ts` calls the specified route
  - the `routes/someRoute.ts` file calls the `controller/someController.ts` file for validation checks
  - the `controller/someController.ts` file then calls the `services/someService.ts` file to do the actual work

### Error Handling

In `core.ErrorHandler`, we define a error-handling middleware for handling invalid inputs/outputs or some unforeseen error from the DB.
