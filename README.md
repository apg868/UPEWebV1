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
  * imagePath - String, not required

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

### Executing program
* Use [Gitname's guide on deploying React apps to GitHub Pages](https://github.com/gitname/react-gh-pages).


## Version History
* 0.1
  * Initial Release

## Acknowledgments

Inspiration, code snippets, etc.
* [README Template](https://twitter.com/dompizzie)
