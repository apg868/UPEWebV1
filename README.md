# UPE Website

This repository hosts UPE@BU's current GitHub pages website.

## Description

This repository hosts UPE@BU's current GitHub pages website. We are using [Trello](https://trello.com/b/0MtO7mPY/upe-website) to manage our roadmap.

## Getting Started

### Dependencies

* Node

### Installing
* Run `npm install` to install the dependencies.
* Run `npm start` to start the site on localhost.

## Backend

### Database
* MongoDB is used
  * Deployed on MongoDB Atlas
  * Connection string stored as env variable dbURL 
* Student Schema
  * name - String, required
  * title - String, required
  * major - String, required
  * year - Number, required
  * funfact - String, not required
  * image_path - String, not required

### Routes
* /students
  * GET for returning all students
  * POST for creating a new student
* /students/:id
  * GET for returning student with :id
  * PUT for updating info on student with :id
  * DELETE for removing student with :id

### Running
* Navigate to backend directory `cd backend`
* To work, needs port and dbURL env variables
* `npm start` or `npm run dev` for auto reloading on save

### Deployment
* Deployed on [render.com] using its free tier
* The first backend call will take considerably longer due to nature of free tier
* To test connection to backend deployment, the frontend in this branch calls the backend to display member info
* See src/components/MemberPage.js to see how frontend calls backend and displays data
* Run frontend with `npm start` in main repository directory

### Executing program
* Use [Gitname's guide on deploying React apps to GitHub Pages](https://github.com/gitname/react-gh-pages).


## Version History
* 0.1
  * Initial Release

## Acknowledgments

Inspiration, code snippets, etc.
* [README Template](https://twitter.com/dompizzie)
