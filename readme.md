# Skate More
## Description
A full stack application that gives you a map of nearby skate shops and parks using the foursquare API and googles geo locator to give you your position

## how to use locally
* clone this repo
* run npm install
* got to foursquare api and get a key to add to .env file
* go to google maps api and get a key for geo locator and add it to .env file
* npm start in both cd file and main folder
* go to localhost:3000 in browser

## Technologies Used
* HTML5
* CSS3
* Node.js
* Express
* JWT Token/Authentication
* MongoDB/Mongoose ORM
* React
* MERN Stack
* Foursquare Places API
* Google GeoLocator API
Postman
[Heroku] (https://skatemore.herokuapp.com/)
Git
[GitHub] (https://github.com/seanberrie/skatemore)  
## Wireframes
[link to wireframes on balsamiq] (https://balsamiq.cloud/s5h2f5d/p9yfnvs/r2278)
### Landing Page
![landing page](https://i.imgur.com/86HQp3k.png)

### Sign Up
![Sign Up](https://i.imgur.com/GdJDmv6.png)

### Login
![my records](https://i.imgur.com/oZzAMkG.png)

### Profile
![Add Record](https://i.imgur.com/g1wxitA.png)

### Edit Account
![edit account](https://i.imgur.com/dYUKBur.png)


### Features

* Search feature from API that searchs for your location to bring nearby spots using local coordinates
  ![signup code snippet](https://i.imgur.com/7xbCzcl.png)
* in one create adding strings to two different models
 ![2 views one model](https://i.imgur.com/3HzwYdG.png)
 * logic that allows each popup to have a different state and so only one pop up shows at a time ![snippet](https://i.imgur.com/4OyVDBl.png)
 * iterating through the results to put markers for each location ![snippet](https://i.imgur.com/jyfVy8u.png)

### Credits

 * Sean Berrie


### Designed and Developed by

 * Sean Berrie [github link](https://github.com/seanberrie "My Github link")

### Links
 * [Heroku Live Website] (https://skatemore.herokuapp.com/)

### Challenges
* Everything no seriously this was a crawl through each step
* using the google-map-react package
* adding to two different models from one create function
* time this project just need so much more time

### I'm Winning 
* my map is functioning and showing all the markers
* I can add spots to a users profile
* getting a better understanding of how to use props and making components more available to multiple areas

### Challenges I want to still complete
* need more time to style
* not all markers are reacting to onclick popups
* wanted to add ratings by users and comments about spots
